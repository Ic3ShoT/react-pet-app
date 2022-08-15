import React from "react"
import Header from "./components/header";
import Users from "./components/users";
import AddUser from "./components/addUser";

class App extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    id: 1,
                    firstname: 'Ian',
                    lastname: 'Iankow',
                    bio: 'loren lore wnlore2n lor enloren lorenlor enlore nloren',
                    age: 27,
                    isHappy: true,
                },
                {
                    id: 2,
                    firstname: 'Neil',
                    lastname: 'Young',
                    bio: 'loren lore wnloren lor enloren lorenlor enlore nloren',
                    age: 81,
                    isHappy: false,
                },
                {
                    id: 3,
                    firstname: 'Timur',
                    lastname: 'Khalim',
                    bio: 'im cool',
                    age: 82,
                    isHappy: true,
                },
            ]
        };
        this.addUser = this.addUser.bind(this)
    }

    render() {
        return (<div>
            <Header title="Список пользователей"/>
            <main>
                <Users users={this.state.users}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser} />
            </aside>
        </div>)
    };

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, {id, ...user}]})
    }
}

export default App;