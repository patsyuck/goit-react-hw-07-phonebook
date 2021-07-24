import ContactItem from '../ContactItem/ContactItem';
/*import React, { useEffect } from 'react';*/
/*import React, { Component } from 'react';*/
/*import { getContacts } from '../../redux/actions';
import { connect } from 'react-redux';*/

const ContactList = ({ friends, filter, onClick, onMount }) => {
  /* 2-ий спосіб: через хуки в ContactList */
  /*useEffect(() => {
    dispatch(onMount())
    onMount()
  }, [])*/

  return (
    <ul>
      {friends
        .filter(
          item => item.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0,
        )
        .map(friend => (
          <ContactItem
            key={friend.id}
            id={friend.id}
            name={friend.name}
            number={friend.number}
            onClick={onClick}
          />
        ))}
    </ul>
  );
};

export default ContactList;

/* 3-ій спосіб: через класовий компонент з готовим пропом */
/*export class ContactList extends Component { 
  componentDidMount() {
    this.props.onMount()
  }

  render() {
    return (
      <ul>
        {this.props.friends
          .filter(
            item => item.name.toLowerCase().indexOf(this.props.filter.toLowerCase()) >= 0,
          )
          .map(friend => (
            <ContactItem
              key={friend.id}
              id={friend.id}
              name={friend.name}
              number={friend.number}
              onClick={this.props.onClick}
            />
          ))}
      </ul>
    );
  }
}

export default ContactList;*/

/* 4-ий спосіб: через класовий компонент із mapDispatchToProps */
/*const mapDispatchToProps = dispatch => {
  return {
    handleData: () => dispatch(getContacts())
  };
};

export default connect(null, mapDispatchToProps)(ContactList);*/
