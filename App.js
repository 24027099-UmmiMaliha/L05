import React,{useState} from 'react';
import {View, Text, TextInput,Button, Alert, TouchableOpacity, ToastAndroid } from 'react-native';
import {Picker} from '@react-native-picker/picker';

//Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText})=> {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    );
};

const MyApp = () => {
    // Declare variables
    const [pw, setPw] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    return (
        <View>
            <Text></Text>

            {/* <InputBox label="User Name:" onChangeText={(text) => setName(text)}/> */}
            {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
            <Text>User Type:</Text>
            <Picker onValueChange={(value) => setType(value)} style={{backgroundColor:'green'}}>
                <Picker.Item label='Admin' value='admin'/>
                <Picker.Item label='Guest' value='guest'/>
            </Picker>

            {/* Ex 1G */}

            <Text>User Name:</Text>
            <TextInput style={{borderWidth:1}} onChangeText={(text) => setName(text)}/>

            {/* Ex1A: Display the text "Password:" with a simple TextInput underneath */}
            <Text>Password:</Text>
            <TextInput
                style={{borderWidth: 1}}
                onChangeText={(text) => setPw(text)}
                secureTextEntry={true}
            />

            {/* <InputBox label="User Name:" onChangeText={(text) => setName(text)}/> */}
            <TouchableOpacity onPress={() => ToastAndroid.show('Welcome ' + type + ' ' + name, ToastAndroid.SHORT)}>
            </TouchableOpacity>

            {/* Ex1C: Add a Button with the title "LOG IN". */}
            <Button title="LOG IN" onPress={() => Alert.alert("Welcome!")}/>
            {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}
            <Text></Text>

            {/* Ex1E: Add TouchableOpacity labelled as "Alternative LOG IN" with Alert message "Hi hi!" */}
            <TouchableOpacity onPress={()=> {
                const correctPassword = '123';
                let mymessage = 'Error! Wrong Password!';
                if (pw == correctPassword) {
                    mymessage = 'Welcome ' + type + ' ' + name;
                }
                ToastAndroid.show(mymessage, ToastAndroid.SHORT);
            }}>
                <Text>LOGIN</Text>
            </TouchableOpacity>

            {/* Ex1F: change Alert message to Toast message */}
            <Text>Entered Password:{pw}</Text>
        </View>
    );
};

export default MyApp;

