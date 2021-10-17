import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import tw from "tailwind-react-native-classnames";
import users from "../../assets/data/users";
import {DataStore} from 'aws-amplify';
import {Match} from "../models";

const MatchesScreen = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() =>  {
        const fetchMatches = async () => {
            const result = await DataStore.query(Match);
            console.log("This is result about the users", result);
        };
        fetchMatches();
    }, []);

    return (

        <SafeAreaView>
            <View style={{width: '100%', flexGrow: 1, padding: 10}}>
                <View style={{padding: 10,}}>
                    <Text style={tw`font-bold text-xl text-pink-400`}>
                        New Matches 🚀
                    </Text>
                    <View style={styles.users}>
                        {users.map((user, index) => (
                            <View key={index} style={[styles.user, {marginHorizontal: 10, marginTop: 6}]}>
                                <Image source={{uri: user.image}} style={styles.image} />
                            </View>
                        )) }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MatchesScreen;

const styles = StyleSheet.create({
    user: {
        width: 100,
        height: 100,
        // padding: 8,
        borderWidth: 2,
        borderColor: '#F63A6e',
        borderRadius: 100,
        padding: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    users: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
});

// backend
