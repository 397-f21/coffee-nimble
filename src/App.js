import "./App.css";
import AddButton from "./components/AddButton";
import TaskCard from "./components/TaskCard";
import AssignButton from "./components/assignButton";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import EditMembersButton from "./components/EditMembersButton";
import { useData } from "./Utilities/firebase.js";
import { AppBar } from "@mui/material";

function App() {

    const [curProj, setCurProj] = useState(-1)
    //const [dbTasks, setDbTasks] = useState(null)
    //const [dbMembers, setDbMembers] = useState(null)
    // const [tasksLoading, setDbTasksLoading] = useState(null)
    // const [membersLoading, setDbMembersLoading] = useState(null)
    // const [tasksError, setDbTasksError] = useState(null)
    // const [membersError, setDbMembersError] = useState(null)

    const [dbTasks, tasksLoading, tasksError] = useData("/projects/"+curProj+"/tasks")
    const [dbMembers, membersLoading, membersError] = useData("/projects/"+curProj+"/members")


    const CurProjectHandler = (id) => {
        //const [dbTasksProj, tasksLoadingProj, tasksErrorProj] = useData("/projects/"+id+"/tasks")
        //const [dbMembersProj, membersLoadingProj, membersErrorProj] = useData("/projects/"+id+"/members")
        
        //if (tasksError || membersError){
        //    return
        //}
        //if (!tasksLoading ){
        setCurProj(id)
         //   setDbTasks(dbTasks)
         //   setDbMembers(dbMembers)
        //}

    }

    return (
        <div className="App">
            <AppBar className="App-header"  >
                <Typography data-cy="nimble" className="title" variant="h8"  >
                    nimble
                </Typography>
            </AppBar>
            <div />
            <div>
                {curProj === -1 ?
                    <div>
                        <AddProject setCurProj={curProjectHandler}/>
                        <JoinProjectButton setCurProj={curProjectHandler}/>
                    </div>
                    :
                    <div>
                        <div>
                            <header className="App-team">
                                <Typography className="title" variant="h5">
                                    Welcome team coffee!
                                </Typography>
                                <EditMembersButton members={dbMembers} tasks={dbTasks} />
                            </header>
                        </div>
                        <div>
                            <Typography className="title" variant="h6">
                                TaskList
                            </Typography>
                            <div className="button-group">
                                <AddButton tasks={dbTasks} />
                                <AssignButton
                                    members={dbMembers}
                                    tasks={dbTasks}
                                    loading={tasksLoading}
                                />

                            </div>
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
                                    <Typography className="title" variant="h9">
                                        press button above to add your new tasks！
                                    </Typography>
                                ) : (
                                    dbTasks.map((task, index) => (
                                        <TaskCard
                                            task={task}
                                            index={index}
                                            members={dbMembers}
                                            key={task.description}
                                        />
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
