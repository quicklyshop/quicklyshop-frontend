import React from 'react';
import './css/App.css';
import 'react-datepicker/dist/react-datepicker.css';
import Button from "@material-ui/core/Button";
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import {Main} from './Main';
import './css/profile.css';
import {StyleSheet, Text, View, Image} from 'react-native';

export class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: [], text: '', priority: 0, dueDate: "" };
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
                <React.Fragment>
                <View id="container">
                  <View id="header">
                    <View id="headerContent">
                        <Image id="avatar"
                          source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                        <Text id="name">John Doe </Text>
                        <Text id="userInfo">jhonnydoe@mail.com </Text>
                        <Text id="userInfo">Florida </Text>
                    </View>
                  </View>

                  <View id="body">
                    <View id="item">
                      <View id="iconContent">
                        <Image id="icon" source={{uri: 'https://png.icons8.com/home/win8/50/ffffff'}}/>
                      </View>
                      <View id="infoContent">
                        <Text id="info">Home</Text>
                      </View>
                    </View>

                    <View id="item">
                      <View id="iconContent">
                        <Image id="icon" source={{uri: 'https://png.icons8.com/settings/win8/50/ffffff'}}/>
                      </View>
                      <View id="infoContent">
                        <Text id="info">Settings</Text>
                      </View>
                    </View>

                    <View id="item">
                      <View id="iconContent">
                        <Image id="icon" source={{uri: 'https://png.icons8.com/news/win8/50/ffffff'}}/>
                      </View>
                      <View id="infoContent">
                        <Text id="info">News</Text>
                      </View>
                    </View>

                    <View id="item">
                      <View id="iconContent">
                        <Image id="icon" source={{uri: 'https://png.icons8.com/shopping-basket/ios11/50/ffffff'}}/>
                      </View>
                      <View id="infoContent">
                        <Text id="info">Shop</Text>
                      </View>
                    </View>

                  </View>
              </View>
                </React.Fragment>

        );
    }

    handleTextChange(e) {

        this.setState({
            text: e.target.value
        });
    }

    handlePriorityChange(e) {

        this.setState({
            priority: e.target.value
        });
    }

    handleDateChange(e) {
        this.setState({
            dueDate: e.target.value
        });
    }

    handleSubmit(e) {

        e.preventDefault();
        if (!this.state.text.length || !this.state.priority.length || !this.state.dueDate)
            return;

        const newItem = {
            text: this.state.text,
            priority: this.state.priority,
            dueDate: this.state.dueDate,

        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: '',
            priority: '',
            dueDate: ''
        }));
    }

}
