import FriendListItem from './FriendListItem/FriendListItem'
import css from 'components/FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>{friends.map(({ avatar, name, id, isOnline }) => (
            <FriendListItem
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
            />
        ))}
        </ul>
    );
};

export default FriendList;