import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Employees from "./features/employees/Employees";
import EditEmployeeProfile from "./features/employees/EditEmployeeProfile";
import Employee from "./features/employees/Employee";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Employees} />
          <Route path="/editEmployee" component={EditEmployeeProfile} />
          <Route path="/employee" component={Employee} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
