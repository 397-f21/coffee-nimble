import EditMembersButton from '../components/EditMembersButton';
import { render, cleanup, fireEvent,getByTestId } from '@testing-library/react';


afterEach(cleanup);
it('test button ui', () => {
  let mem = [
    {
        "name": "Irs",
        "score": 0
    }
  ]
    const { container } = render(<EditMembersButton members={mem}/>); 
  
      const button = container.firstChild
      expect(button.classList.contains('MuiButton-contained')).toBe(false)
  });



