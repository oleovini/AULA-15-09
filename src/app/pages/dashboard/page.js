import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   
    return (
        <div>
            <h1>Dashboard</h1>
            <ul><li>{getUsers}</li></ul>
        </div>
    );
};