import { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Touchable, Button } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SearchBar } from 'react-native-screens';
import Icon from 'react-native-vector-icons/Ionicons'



const SearchIcon = <Icon style={{top:18, marginLeft: 20}} name="search" size={30} color="black" />;

const DropDownText = ({txt}) => {
    return (
      <View style={{}}>
      <Text style={{fontWeight: 500, fontSize: 20, alignSelf: 'center'}}>{txt}</Text>
      </View>
    )
  }

  const PlusIcon = <Icon name="add" size={18} color="#900" />;
  const ArrowIcon = ({style, onPress}) => {
    return (
      <TouchableOpacity onPress={onPress} style={styles.dropdown}>
  <Icon style={[{top: 5, marginTop: 0, left: 4, fontWeight: 800, marginLeft: 10}, style]} name="chevron-down-outline" size={17}  color="black" />
  </TouchableOpacity>
    )}  ;
  
  const SmallButton = ({onPress, style}) => {
    return (
      <View>
      <TouchableOpacity onPress={onPress} style={[styles.smallButton, style, {opacity: 0}]}>
          <Text style={[{alignSelf: 'center', fontWeight: 700, fontSize: 12, bottom: 3}, style]}>Now
          {/* <ArrowIcon style={{opacity: isClicked===true? 0 : 1}} isClicked={isClicked}/> */}
          </Text>
          <Text style={{alignSelf: 'center', fontWeight: 700, fontSize: 12, margin: 3, bottom: 3}}>Next Week
          </Text>
          <Text style={{alignSelf: 'center', fontWeight: 700, fontSize: 12, margin: 3,bottom: 3}}>Next Month
          </Text>
          <Text style={{alignSelf: 'center', fontWeight: 700, fontSize: 12, margin: 3,bottom: 3}}>Next Year
          </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{
      backgroundColor: 'white',
      borderWidth: 1,
      height: 120,
      borderRadius: 20,
      color: 'gray',
      borderColor: 'transparent',
      fontSize: 12,
      marginHorizontal:20,
      width: 160,
      justifyContent: 'center',
      alignSelf: 'flex-end',
      position: 'relative',
      bottom: 85,
      fontWeight: 700,
      opacity: 0
      }}>
        {/* <View style={{justifyContent: 'space-around'}}>
        <DropDownText txt={'Now'}/>
        <Seperator />
        <DropDownText txt={'Next Week'}/>
        <Seperator />
        <DropDownText txt={'Next Month'}/>
        <Seperator />
        <DropDownText txt={'Next Summer'}/>
        </View> */}
      </TouchableOpacity>
      </View>
    )
  }

export const Container = ({txt, style}) => {
    return (
      <TouchableOpacity style={[{margin: 20}, style]}>
        {SearchIcon}
        <TextInput
        placeholder='Where to?'
        style={[styles.input]} 
        // onChangeText={(txt) => {handleText(txt)}}
        >
        </TextInput>
        <SmallButton style={{}} onPress={()=>{setIsClicked(true)}}/>
      </TouchableOpacity>
    )
  }
export const SearchContainer = ({txt, style}) => {
    return (
      <TouchableOpacity style={[{margin: 20}, style]}>
        {SearchIcon}
        <TextInput
        placeholder='Where to?'
        style={[styles.input]} 
        onChangeText={(txt) => {handleText(txt)}}>
        </TextInput>
        <SmallButton style={{}} onPress={()=>{setIsClicked(true)}}/>
      </TouchableOpacity>
    )
  }

  const styles = StyleSheet.create({
    inputBox: {
      backgroundColor: '#f1faee',
      borderWidth: 1,
      height: 70,
      borderRadius: 40,
      color: 'gray',
      borderColor: 'transparent',
      fontSize: 24,
      marginHorizontal:20
    }, 
    searchBox: {
      backgroundColor: '#f1faee',
      borderWidth: 1,
      height: 70,
      borderRadius: 40,
      color: 'gray',
      borderColor: 'transparent',
      fontSize: 24,
      marginHorizontal:20,
      height: 200
    },
    input: {
      backgroundColor: 'transparent',
      paddingLeft: 40,
      borderRadius: 40,
      color: 'white',
      borderColor: 'transparent',
      fontSize: 24,
      bottom: 12,
      left: 20,
    },
    smallButton: {
      backgroundColor: 'white',
      borderWidth: 1,
      height: 30,
      borderRadius: 30,
      color: 'gray',
      borderColor: 'transparent',
      fontSize: 12,
      marginHorizontal:20,
      width: 80,
      justifyContent: 'center',
      alignSelf: 'flex-end',
      position: 'relative',
      bottom: 40,
    },

  })