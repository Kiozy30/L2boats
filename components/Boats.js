import {Image, Text, View} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome6";

const Boats = ({name, description, poster}) => {
    return (
        <View>
            <Image source={poster} style={{width:400, height:500}}/>
            <Text>
                {name} {description}
            </Text>
        </View>
    );
};

export default Boats;
