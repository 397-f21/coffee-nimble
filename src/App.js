import "./App.css";
import AddButton from "./components/AddButton";
import AssignButton from "./components/assignButton";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import EditMembersButton from "./components/EditMembersButton";
import { useData } from "./Utilities/firebase.js";
import { AppBar } from "@mui/material";
import TaskList from "./components/TaskList";
import JoinProjectButton from "./components/JoinProjectButton"

function App() {

    const [curProj, setCurProj] = useState(-1)
    const [dbTasks, tasksLoading, tasksError] = useData("/tasks")
    const [dbMembers, membersLoading, membersError] = useData("/members")

    return (
        <div className="App">
            <AppBar className="App-header"  >
                <Typography data-cy="nimble" variant="h8"  >
                    nimble
                </Typography>
            </AppBar>
            <div />
            <div>
                {curProj === -1 ?
                    <div>
                        <JoinProjectButton setCurProj={setCurProj}/>
                    </div>
                    :
                    <div id="main-body">
                        <div className="App-team">
                            <Typography className="title" variant="h5">
                                welcome, team coffee!
                            </Typography>
                            <EditMembersButton members={dbMembers} tasks={dbTasks} />
                        </div>
                        <div className="button-group">
                            <AddButton tasks={dbTasks} />
                            <AssignButton
                                members={dbMembers}
                                tasks={dbTasks}
                                loading={tasksLoading}
                            />
                        </div>
                        { membersLoading ?
                            <div>Loading team members...</div>
                            : membersError ?
                            <div>{membersError}</div>
                            : <div></div>
                        }
                        <div className="task-list">
                            {tasksError ? (
                                <Typography className="title" variant="h5">
                                    {tasksError}
                                </Typography>
                            ) : tasksLoading ? (
                                <Typography className="title" variant="h6">
                                    tasks loading...
                                </Typography>
                            ) : dbTasks === null ? (
                                <Typography className="message" variant="h9">
                                    use the buttons above to add and assign new tasks！
                                </Typography>
                            ) : <TaskList tasks={dbTasks}/>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
