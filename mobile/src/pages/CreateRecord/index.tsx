import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import { FontAwesome5 as Icon } from '@expo/vector-icons';

import Header from '../../components/Header';
import PlatformCard from './PlatformCard';
import { GamePlatform, Game } from './types';

import api from '../../services/api';

const placeholder = {
    label: 'Selecione o Game',
    value: null
}

const mapSelectValue = (games: Game[]) => {
    return games.map(game => ({
        ...game,
        label: game.title,
        value: game.id
    }))
}

const CreateRecord = () => {

    const [platform, setPlatform] = useState<GamePlatform>();
    const [selectedGame, setSelectedGame] = useState('');
    const [allGames, setAllGames] = useState<Game[]>([]);
    const [filteredGames, setFilteredGames] = useState<Game[]>([]);

    const handleChangePlatform = (selectedPlatform: GamePlatform) => {
        setPlatform(selectedPlatform);
        const gamesByPlatform = allGames.filter(
            game => game.platform === selectedPlatform
        )
        setFilteredGames(gamesByPlatform);
    }

    useEffect(() => {
        api.get('/games')
            .then(res => {
                const selectValues = mapSelectValue(res.data);
                setAllGames(selectValues);
            });
    })

    return (
        <>
            <Header />
            <View style={styles.container}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Nome"
                    placeholderTextColor="#9e9e9e"
                />
                <TextInput
                    style={styles.inputText}
                    placeholder="Idade"
                    placeholderTextColor="#9e9e9e"
                    keyboardType="numeric"
                    maxLength={3}
                />

                <View style={styles.platformContainer}>
                    <PlatformCard
                        platform="PC"
                        onChange={handleChangePlatform}
                        icon="laptop"
                        activePlatform={platform}
                    />
                    <PlatformCard
                        platform="XBOX"
                        onChange={handleChangePlatform}
                        icon="xbox"
                        activePlatform={platform}
                    />
                    <PlatformCard
                        platform="PLAYSTATION"
                        onChange={handleChangePlatform}
                        icon="playstation"
                        activePlatform={platform}
                    />
                </View>

                <RNPickerSelect
                    style={pickerSelectStyles}
                    placeholder={placeholder}
                    onValueChange={value => {
                        setSelectedGame(value);
                    }}
                    value={selectedGame}
                    items={filteredGames}
                    Icon={() => {
                        return <Icon name="chevron-down" color="#9e9e9e" size={25} />
                    }}
                />
            </View>
        </>
    )
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ED7947',
        paddingRight: 30,
        fontFamily: "Play_700Bold",
        height: 50
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ED7947',
        paddingRight: 30,
        fontFamily: "Play_700Bold",
        height: 50
    },
    placeholder: {
        color: '#9E9E9E',
        fontSize: 16,
        fontFamily: "Play_700Bold",
    },
    iconContainer: {
        top: 10,
        right: 12,
    }
})


const styles = StyleSheet.create({
    container: {
        marginTop: '15%',
        paddingRight: '5%',
        paddingLeft: '5%',
        paddingBottom: 50
    },
    inputText: {
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        color: '#ED7947',
        fontFamily: "Play_700Bold",
        fontSize: 16,
        paddingLeft: 20,
        marginBottom: 21
    },
    platformContainer: {
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footer: {
        marginTop: '15%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#00D4FF',
        flexDirection: 'row',
        borderRadius: 10,
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: "Play_700Bold",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#0B1F34',
    }
});

export default CreateRecord;