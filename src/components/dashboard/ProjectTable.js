import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
 
import user1 from "../../assets/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
const ProjectTables = (props) => {

  const tableData = [
    {
      avatar:user2,
      name:'Vivek Deshpande',
      email:'vivek@gmail.com',
      project:'IND Content',
      status:'Complete',
      weeks:'35',
      budget:'2LAC',
    },
    {
      avatar:user1,
      name:'Anagha Deshpandes',
      email:'anagha@gmail.com',
      project:'IND Content',
      status:'Complete',
      weeks:'35',
      budget:'1LAC',
    }
  ]
  
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Team Lead</th>
                <th>Project</th>

                <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
