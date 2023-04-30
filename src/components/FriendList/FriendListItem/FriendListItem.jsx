import PropTypes from "prop-types";
import css from 'components/FriendList/FriendListItem/FriendListItem.module.css';
import defaultImage from 'components/Default_img.jpeg';

const FriendListItem = ({
    isOnline,
    avatar = defaultImage,
    name,
}) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.status__true : css.status__false}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}></p>
        </li>
    );
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}

export default FriendListItem;