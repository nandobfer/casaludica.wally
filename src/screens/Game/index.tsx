import React, { useContext, useEffect, useState } from "react"
import { NavigationProp } from "@react-navigation/native"
import { Dimensions, ImageBackground, Pressable, Text, View } from "react-native"
import { Game } from "../../class/Game/Game"
import { ObjectComponent } from "./ObjectComponent"
import { GoalsContainer } from "./GoalsContainer"
import { ScoreContainer } from "./ScoreContainer"
import SettingsContext from "../../contexts/settingsContext"
import { GameForm } from "../../class/Game/GameForm"
import { Filter } from "../../components/Filter"
import { Timer } from "../../components/Timer"
import { ScoreModal } from "../../components/ScoreModal"

interface GamePageProps {
    navigation: NavigationProp<any, any>
}

export const GamePage: React.FC<GamePageProps> = ({ navigation }) => {
    const { height, width } = Dimensions.get("screen")
    const offsetY = 100
    const { settings, setSettings } = useContext(SettingsContext)

    const [_, setReRender] = useState({})

    const triggerRerender = () => {
        setReRender({})
    }

    const game_settings: GameForm = { theme: 1, offsetY, settings }

    const [game, setGame] = useState(new Game(game_settings, triggerRerender))
    const [scoreModal, setScoreModal] = useState(false)

    const reset = () => {
        setGame(new Game(game_settings, triggerRerender))
    }

    useEffect(() => {
        if (game.found == game.goals.length) {
            setScoreModal(true)
        }
    }, [game.found])

    return (
        <ImageBackground
            style={{ flex: 1, position: "relative" }}
            imageStyle={{
                resizeMode: "cover",
                aspectRatio: 1,
            }}
            source={game.background}
        >
            <Pressable onPress={reset} style={{ elevation: 999, zIndex: 999, width: 50, borderColor: "red", borderWidth: 1 }}>
                <Text>reset</Text>
            </Pressable>
            {game.objects.map((object, index) => (
                <ObjectComponent key={index} object={object} navigation={navigation} game={game} />
            ))}
            {game.filter && <Filter hex={game.filter.hex} opacity={game.filter.opacity} />}
            <GoalsContainer game={game} />
            <ScoreContainer game={game} />
            <View
                style={{
                    position: "absolute",
                    borderColor: "blue",
                    borderWidth: 1,
                    width,
                    bottom: game.settings.offsetBottom,
                    top: game.settings.offsetTop,
                }}
            ></View>

            <Timer game={game} />
            <ScoreModal onClose={() => setScoreModal(false)} open={scoreModal} />
        </ImageBackground>
    )
}
