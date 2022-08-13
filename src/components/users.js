import React from "react";

class Users extends React.Component {
    users = [
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
    ];

    render() {
        if(this.users.length > 0){
            return (
                <div>
                    {this.users.map((element) => (<div className="user" key={element.id}>
                            <h3>{element.firstname} {element.lastname}</h3>
                            <p>{element.bio}</p>
                            <b>{element.isHappy ? 'Счастлив)' : 'не счастлив(('}</b>
                        </div>
                    ))}
                </div>
            );
        }
        else {
            return (
                <div className="user">
                    <h3>Пользователей нет</h3>
                </div>
            );
        }

    };

}

export default Users;