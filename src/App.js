import { BrowserRouter, Switch, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import Employees from "./features/employees/Employees";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Employees} />
        </Switch>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
