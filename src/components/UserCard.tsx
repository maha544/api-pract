import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
type User = {
    name: string;
    email: string;
    body: string;
}

type UserCardProps = {
    user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
    return (
        <Card variant="outlined" style={{ marginBottom: '20px' }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {user.name}
                </Typography>
                <Typography color="textSecondary" gutterBottom>
                    {user.email}
                </Typography>
                <Typography variant="body2" component="p">
                    {user.body}
                </Typography>
            </CardContent>
        </Card>
    );
};
type UsersListProps = {
    userList: User[];
}

const UsersList: React.FC<UsersListProps> = ({ userList }) => {
    return (
        <Container>
            {userList.map((user, index) => (
                <UserCard key={index} user={user} />
            ))}
        </Container>
    );
};

export default UsersList;
