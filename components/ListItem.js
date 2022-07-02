import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ListItem = ({ name, symbol, currentPrice, priceChangePercentage, logoUrl, onPress }) => {
    const priceChangeColor = priceChangePercentage > 0 ? '#34C759' : '#FF3B30';
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemWrapper}>

                {/* Left side */}
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: logoUrl }} style={styles.image} />
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>


                {/* Right side */}
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
                    <Text style={[styles.subtitle, { color: priceChangeColor }]}>{priceChangePercentage.toFixed(2)}%</Text>
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: 'center',
    },
    image: {
        height: 50,
        width: 50,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        marginTop: 4,
        fontSize: 14,
        color: "#A9ABB1",
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
})


