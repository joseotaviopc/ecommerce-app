import colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        borderColor: colors.light,
        borderWidth: StyleSheet.hairlineWidth,
        backgroundColor: colors.white,
        overflow: "hidden",
    },
    image: {
        width: 170,
        height: 170,
        objectFit: "cover",
        backgroundColor: colors.white,
    },
    imageHorizontal: {
        width: 170,
        height: 314,
        objectFit: "cover",
        alignSelf: "center",
    },
    boxInfo: {
        flex: 1,
        width: "100%",
        gap: 10,
        padding: 16,
    },
    boxInfoHorizontal: {
        width: "100%",
        gap: 8,
    },
    title: {
        color: colors.darker,
        fontSize: 16,
        fontFamily: "NotoSans_600",
        lineHeight: 20,
    },
    price: {
        color: colors.darker,
        fontSize: 20,
        fontFamily: "NotoSans_700",
        lineHeight: 32,
    },
});