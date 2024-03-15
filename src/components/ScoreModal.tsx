import React from "react"
import { Image, Modal, Pressable, Text, TouchableOpacity, View } from "react-native"
import { Game } from "../class/Game/Game"
import { NavigationProp } from "@react-navigation/native"
import { buttonStyle } from "../style/buttonStyle"
import { textStyle } from "../style/textStyle"
import { colors } from "../style/colors"

interface ScoreModalProps {
    open: boolean
    onClose: () => void
    game: Game
    navigation: NavigationProp<any, any>
}

export const ScoreModal: React.FC<ScoreModalProps> = ({ open, onClose, game, navigation }) => {
    const elapsed_time = new Date(game.time).toLocaleTimeString("pt-br", { minute: "2-digit", second: "2-digit" })

    return (
        <Modal animationType="slide" transparent={true} visible={open}>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flex: 1,
                }}
            >
                <View
                    style={{
                        borderColor: colors.blue,
                        borderWidth: 4,
                        borderRadius: 50,
                        height: 300,
                        width: 390,
                        position: "relative",
                    }}
                >
                    <Image
                        source={require("../../assets/interface/fundo.webp")}
                        style={{ position: "absolute", height: "100%", width: "100%", borderRadius: 50, resizeMode: "cover" }}
                    />
                    <View
                        style={{
                            justifyContent: "center",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 20,
                            padding: 20,
                        }}
                    >
                        <Text style={{ fontSize: 40, fontFamily: "KGSecondChancesSketch", color: colors.blue }}>Muito bem!</Text>
                        {game.stage != 3 ? (
                            <Text style={{ fontSize: 20, fontFamily: "KGSecondChancesSolid", color: colors.blue, textAlign: "center", width: 250 }}>
                                Você encontrou todos os objetivos deste cenário!
                            </Text>
                        ) : (
                            <Text style={{ fontSize: 20, fontFamily: "KGSecondChancesSolid", color: colors.blue, textAlign: "center", width: 250 }}>
                                Você completou todos os cenários!
                            </Text>
                        )}
                        {/* <Text>tempo: {elapsed_time}</Text>
                            <Text>erros: {game.misclicks}</Text> */}
                        {game.stage < 3 && (
                            <TouchableOpacity style={{ ...buttonStyle, backgroundColor: colors.orange }} onPress={() => onClose()}>
                                <Text style={textStyle}>Avançar</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </Modal>
    )
}
