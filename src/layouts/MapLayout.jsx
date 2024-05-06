import React, { useMemo, useState } from "react";
import { getCurrentUser } from "../api/FirestoreAPI";
import Topbar from "../components/common/Topbar";
import Worldmap from "../components/Worldmap";

export default function MapLayout() {
    const [currentUser, setCurrentUser] = useState({});

    useMemo(() => {
        getCurrentUser(setCurrentUser);
    }, []);
    return (
    <div>
        <Topbar currentUser={currentUser} />
        <Worldmap/>
    </div>
    )
}
