import React from "react";
import Loader from "./Components/loader";

import Routing from "./routing";

function App() {
    const [loading, setLoading] = React.useState(true);
    const handleLoading = () => {
        setLoading(false);
    };
    setTimeout(handleLoading, 3500);
    return <div className="App">{loading ? <Loader /> : <Routing />}</div>;
}

export default App;
