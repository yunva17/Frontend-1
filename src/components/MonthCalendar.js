import React,{useState, useEffect} from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, View } from 'react-native';
import styled from "styled-components/native";
import {getFontSize, getWidth, getHeight} from "../hooks/caculateSize";
import { images } from '../images';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';

// var moment = require('moment-timezone');
// moment.tz.setDefault("Asia/Seoul");
// exports.moment = moment;

const CalendarView = styled.View`
    position: absolute;
    width: ${getWidth(320)}px;
    height: ${getHeight(550)}px;
    top: ${getHeight(110)}px;
    left: ${getWidth(20)}px;
    right: ${getWidth(20)}px;
    justify-content: center;
    align-items: center;
`;

const MonthView = styled.View`
    position: absolute;
    top: ${getHeight(9)}px;
    width: ${getWidth(65)}px;
    height: ${getHeight(82)}px;
    left: ${getWidth(29)}px;
    right: ${getWidth(243)}px;
    justify-content: center;
    align-items: center;
`;

const MonthText = styled.Text`
    font-family: 'KOTRA HOPE_TTF';
    font-size: ${getFontSize(70)}px;
    font-style: normal;
    letter-spacing: 0;
    text-align: center;
    color: ${({theme}) => theme.monthcolor};
`;

const DrawingText = styled.View`
    position: absolute;
    width: ${getWidth(243)}px;
    height: ${getHeight(160)}px;
    top: ${getHeight(30)}px;
    left: ${getWidth(37)}px;
    right: ${getWidth(40)}px;
`;

const DateText = styled.Text`
    font-family: '나눔손글씨 중학생';
    font-size: ${({size}) => size ? getFontSize(size) : getFontSize(20)}px;
    font-style: normal;
    letter-spacing: 0;
    text-align: ${({align}) => align ? align : 'center'};
    color: ${({theme}) => theme.blackText};
`; 

const DayView = styled.View`
    width: ${getWidth(34.4)}px;
    height: ${getHeight(34)}px;
    margin-bottom: ${getHeight(16)}px;
`;

const DateView = styled.TouchableOpacity`
    width: ${getWidth(34.4)}px;
    height: ${getHeight(34)}px;
    margin-bottom: ${getHeight(16)}px;
`;

const MonthCalendar = () => {

    const [date, setDate] = useState(moment());
    
    const [year, setYear] = useState(date.format('YYYY'));
    const [month, setMonth] = useState(date.format('MM'));
    const [day, setDay] = useState(date.format('DD'));
    
    const [open, setOpen] = useState(false);
    let defaultdate = date.format('YYYY')+'년 ' + date.format('MM')+'월';
    const [value, setValue] = useState(defaultdate);
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     
    //     while(date.subtract(1, 'M').format('YYYY MM')!=createdate.format('YYYY MM')){
    
    //         let newdate = date.subtract(i, 'M');
    //         setItems(...items,
    //             {label:newdate.format('YYYY')+'년 ' + newdate.format('MM')+'월', value: newdate});
    //         
    //     }
    // },[])


    // 저번 달
    const _prevMonth = () => {
        setDate(date.clone().subtract(1, 'M'));
        setYear(date.clone().subtract(1, 'M').format('YYYY'));
        setMonth(date.clone().subtract(1, 'M').format('MM'));
    };

    // 다음 달

    const _nextMonth = () => {
        setDate(date.clone().add(1, 'M'));
        setYear(date.clone().add(1, 'M').format('YYYY'));
        setMonth(date.clone().add(1, 'M').format('MM'));
    };

    const handleDayClick = (current) => {setDay(current);};

    const generate = () => {
        const today = date;

        const startWeek = today.clone().startOf('month').week();
        const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
        
        let calendar = [];
        let day =['일','월','화','수','목','금','토'];

        for (let week = startWeek; week <= endWeek; week++) {
            calendar.push(
                <View style={styles.row}>
                {Array(7)
                  .fill(0)
                  .map((n, i) => {
                    // 오늘 => 주어진 주의 시작 => n + i일 만큼 더해서 각 주의 '일'을 표기
                    let current = today
                      .clone()
                      .week(week)
                      .startOf('week')
                      .add(n + i, 'day');
      
                    // 오늘이 current와 같다면 표시
                    let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
    
                    // 이번달 아니면 표시 X
                    let isNotMonth = current.format('MM') == today.format('MM');

                    return (
                        <DateView onPress={() => {handleDayClick(current.format('D'))}}>
                        {isNotMonth &&
                            <>
                            <Image source={images.notselected} style={styles.emotion}/>
                            <DateText style={styles.textcenter}>{current.format('D')}</DateText></>}
                        </DateView>
                    );
                  })}
              </View>,
            );
          }
          return (
              <View>
                <View style={styles.row}>
                    {day.map((d, index) => 
                        <DayView key = {index}>
                            <DateText size={25}>{d}</DateText>
                        </DayView>)}
                </View>
                {calendar}
              </View>
            );
    }

    return (
        <View> 
            <View style={{top: getHeight(67)}}>
                <DateText size={30}>{year}년 {month}월</DateText>
            </View>
            <TouchableOpacity style={{top: getHeight(74), position:'absolute', left: getWidth(110),}}
                onPress={_prevMonth}>
                <DateText size={20}>◀</DateText>
            </TouchableOpacity>
            <TouchableOpacity style={{top: getHeight(74), position:'absolute',right: getWidth(110)}}
                onPress={_nextMonth}>
                <DateText size={20}>▶</DateText>
            </TouchableOpacity>
        <CalendarView>
            <Image source={images.CalendarBorder} style={styles.calendar}/>
                <DrawingText>
                    <Image source={images.NovDrawing} style={styles.drawing}/>
                    {generate()}
                </DrawingText>
            <MonthView>
            <MonthText>{month}</MonthText>                        
            </MonthView>
        </CalendarView>
        <View style={styles.dayview}><DateText size={20} align={'left'}>{month}월 {day}일</DateText></View>
        <TouchableOpacity>
            <View style={styles.calendarpic}><Image source={images.calendarpic} style={styles.calendar}/></View>
            <View style={styles.calendarcontent}><Image source={images.calendarcontent} style={styles.calendar}/></View>
        </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    calendar: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
    },
    drawing: {
        width: '100%',
        resizeMode: 'stretch',
    },
    row: {
        flexDirection:'row',
    },
    emotion: {
        position:'absolute',
    },
    textcenter: {
        textAlignVertical:'center'
    },
    dayview:{
        top: getHeight(640),
        left: getWidth(25),
        right: getWidth(297),
    },
    calendarpic: {
        position:'absolute',
        top: getHeight(650),
        left: getWidth(20),
        right: getWidth(260),
        width: getWidth(80),
        height: getHeight(80),
    },
    calendarcontent: {
        position:'absolute',
        top: getHeight(650),
        left: getWidth(110),
        right: getWidth(18),
        width: getWidth(232),
        height: getHeight(80),
    },
});


export default MonthCalendar;