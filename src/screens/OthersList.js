import React from 'react';
import {StyleSheet, Text, View, ImageBackground, ScrollView, Image, TouchableOpacity} from 'react-native';
import styled, {ThemeContext} from "styled-components/native";
import {images} from "../images";
import {getFontSize, getHeight, getWidth} from "../hooks/caculateSize";

const DayText = styled.Text`
    font-family: '나눔손글씨 중학생';
    font-size: ${getFontSize(30)}px;
    font-style: normal;
    position: absolute;
    top: ${getHeight(52)}px;
    left: ${getWidth(125)}px;
    letter-spacing: 0;
    text-align: left;
    color: ${({theme}) => theme.blackText};
`;

const NicknameText = styled.Text`
    font-family: '나눔손글씨 중학생';
    font-size: ${getFontSize(20)}px;
    font-style: normal;
    position: absolute;
    top: 0;
    left: 0;
    letter-spacing: 0;
    text-align: left;
    color: ${({theme}) => theme.blackText};
`;

const RemainText = styled.Text`
    font-family: '나눔손글씨 중학생';
    font-size: ${getFontSize(20)}px;
    font-style: normal;
    position: absolute;
    top: 0;
    right: 0;
    letter-spacing: 0;
    text-align: left;
    color: ${({theme}) => theme.blackText};
`;

const _onPress =() => {
    navigation.navigate();
};

const OthersList = ({navigation}) => {
    return (
        <ImageBackground source={images.background} style={{width: "100%", height: "100%"}}>
               <DayText>2021년 11월 20일</DayText>
               <ScrollView style={{marginTop: getHeight(110)}}>
                   <TouchableOpacity onPress={_onPress} style={{left: getWidth(30), marginBottom: getHeight(14), width: getWidth(300), height: getHeight(110)}}>
                        <NicknameText>닉네임</NicknameText>
                        <RemainText>5분전</RemainText>
                        <Image source={images.otherProfile} style={{position: "absolute", bottom: 0, width: getWidth(90), height: getHeight(90), resizeMode: "contain"}}/>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={_onPress} style={{left: getWidth(30), marginBottom: getHeight(14), width: getWidth(300), height: getHeight(110)}}>
                        <NicknameText>닉네임</NicknameText>
                        <RemainText>5분전</RemainText>
                        <Image source={images.otherProfile} style={{position: "absolute", bottom: 0, width: getWidth(90), height: getHeight(90), resizeMode: "contain"}}/>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={_onPress} style={{left: getWidth(30), marginBottom: getHeight(14), width: getWidth(300), height: getHeight(110)}}>
                        <NicknameText>닉네임</NicknameText>
                        <RemainText>5분전</RemainText>
                        <Image source={images.otherProfile} style={{position: "absolute", bottom: 0, width: getWidth(90), height: getHeight(90), resizeMode: "contain"}}/>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={_onPress} style={{left: getWidth(30), marginBottom: getHeight(14), width: getWidth(300), height: getHeight(110)}}>
                        <NicknameText>닉네임</NicknameText>
                        <RemainText>5분전</RemainText>
                        <Image source={images.otherProfile} style={{position: "absolute", bottom: 0, width: getWidth(90), height: getHeight(90), resizeMode: "contain"}}/>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={_onPress} style={{left: getWidth(30), marginBottom: getHeight(14), width: getWidth(300), height: getHeight(110)}}>
                        <NicknameText>닉네임</NicknameText>
                        <RemainText>5분전</RemainText>
                        <Image source={images.otherProfile} style={{position: "absolute", bottom: 0, width: getWidth(90), height: getHeight(90), resizeMode: "contain"}}/>
                   </TouchableOpacity>

                   <TouchableOpacity onPress={_onPress} style={{left: getWidth(30), marginBottom: getHeight(14), width: getWidth(300), height: getHeight(110)}}>
                        <NicknameText>닉네임</NicknameText>
                        <RemainText>5분전</RemainText>
                        <Image source={images.otherProfile} style={{position: "absolute", bottom: 0, width: getWidth(90), height: getHeight(90), resizeMode: "contain"}}/>
                   </TouchableOpacity>
                   
               </ScrollView>
        </ImageBackground>
    );
};



export default OthersList;