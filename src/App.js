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
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)
    }

    render() {
        return (<div>
            <Header title="Список пользователей"/>
            <main>
                <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser}/>
            </main>
            <aside>
                <AddUser onAdd={this.addUser} />
            </aside>
        </div>)
    };

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((elem) => elem.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users
        allUsers[user.id - 1] = user

        this.setState({users: []}, () => {
            this.setState({users: [...allUsers]})
        })
    }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, {id, ...user}]})
    }
}

export default App;