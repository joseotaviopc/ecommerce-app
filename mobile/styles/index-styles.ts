import colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        gap: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    errorBox: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    filterBox: {
        // flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 4,
    },
    contentContainer: {
        flex: 1,
        padding: 18,
        alignItems: "center",
        position: "relative",
    },
    productListBox: {
        // flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    bottomSheetStyle: {
        borderWidth: 0,
        borderColor: colors.dark,
        borderRadius: 14,
        shadowColor: colors.dark,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.34,
        shadowRadius: 8,

        elevation: 10,
        marginLeft: "5%",
        width: "90%",
    },
    inputBox: {
        flexDirection: "row",
        justifyContent: "space-between",
        position: "relative",
        marginBottom: 12,
    },
    input: {
        fontFamily: "NotoSans_400",
        width: "100%",
        height: 40,
        borderBottomColor: colors.light,
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10,
        color: colors.darkBlue,
    },
    eraseIcon: {
        borderWidth: 1,
        borderRadius: 24,
        borderColor: colors.dark,
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: 8,
        top: 10,
    },
    eraseText: {
        fontSize: 16,
        fontFamily: "NotoSans_400",
        color: colors.dark,
    },
    filterTitle: {
        width: 80,
        textAlign: "center",
        color: colors.darker,
        fontSize: 16,
        fontFamily: "NotoSans_600",
        lineHeight: 20,
    },
});
