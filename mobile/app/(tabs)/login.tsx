import { ActivityIndicator, Text, View } from "react-native";

import Button from "@/components/button";
import colors from "@/constants/Colors";
import type { RootStackParamList } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import AsyncStorage from "@react-native-async-storage/async-storage";
import type { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import z from "zod";
import { useAuth } from "@/hooks/useAuth";
import Colors from "@/constants/Colors";

const loginSchema = z.object({
	email: z
		.string({ message: "Digite um email válido" })
		.email("Digite um email válido"),
	password: z
		.string({ message: "Digite uma senha com pelo menos 8 caracteres" })
		.min(8, "Digite uma senha com pelo menos 8 caracteres"),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginScreen() {
	const navigation = useNavigation<NavigationProp<RootStackParamList>>();
	const [loading, setIsLoading] = useState(false);

	const {
		handleSubmit,
		control,
		reset,
		formState: { isLoading, errors },
	} = useForm<LoginSchema>({
		resolver: zodResolver(loginSchema),
	});

	const handleLogin = async (data: LoginSchema) => {
		setIsLoading(true);
		try {
			await AsyncStorage.setItem("isLoggedIn", data.email);
			setTimeout(() => {
				reset();
				setIsLoading(false);
				navigation.navigate("(tabs)", { screen: "index" });
			}, 1000);
		} catch (error) {
			console.error("Error saving login status:", error);
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login</Text>
			<Text style={styles.subTitle}>
			Selecione um nome de usuário e uma senha na lista abaixo ou clique no nome de usuário para preencher automaticamente o nome de usuário e a senha.
			</Text>
			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						placeholder="Email"
						keyboardType="email-address"
						placeholderTextColor={colors.dark}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
					/>
				)}
				name="email"
			/>
			{errors.email && (
				<Text style={styles.errorText}>{errors.email.message}</Text>
			)}
			<Controller
				control={control}
				render={({ field: { onChange, onBlur, value } }) => (
					<TextInput
						style={styles.input}
						placeholder="Senha"
						secureTextEntry={true}
						placeholderTextColor={colors.dark}
						onBlur={onBlur}
						onChangeText={onChange}
						value={value}
					/>
				)}
				name="password"
			/>
			{errors.password && (
				<Text style={styles.errorText}>{errors.password.message}</Text>
			)}
			<Button
				loading={isLoading || loading}
				title="Login"
				onPress={handleSubmit(handleLogin)}
			/>
			<View style={styles.infoContainer}>
				<Text style={styles.infoTextBold}>Nomes de usuário aceitos:</Text>
				<Text style={styles.infoText}>
				bob@example.com
				</Text>
				<Text style={[styles.infoText, { marginBottom: 24}]}>
				alice@example.com (locked out)
				</Text>
				<Text style={styles.infoTextBold}>Senha para todos os usuários:</Text>
				<Text style={styles.infoText}>10203040</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		lineHeight: 32,
		fontFamily: "NotoSans_700",
		marginBottom: 20,
		alignSelf: 'flex-start',
		textAlign: 'left'
	},
	subTitle: {
		fontSize: 16,
		fontFamily: "NotoSans_400",
		marginBottom: 24,
		color: Colors.dark
	},
	errorText: {
		fontFamily: "NotoSans_400",
		color: colors.red,
		fontSize: 14,
		marginBottom: 10,
	},
	input: {
		fontFamily: "NotoSans_400",
		width: "100%",
		height: 40,
		borderBottomColor: Colors.light,
		borderBottomWidth: 1,
		paddingHorizontal: 10,
		marginBottom: 10,
		color: colors.darkBlue,
	},
	button: {
		width: "100%",
		backgroundColor: "blue",
		padding: 10,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
	infoContainer: {
		borderRadius: 8,
		borderWidth: 1,
		borderColor: Colors.light,
		backgroundColor: Colors.light,
		padding: 16,
		marginTop: 48,
		width: '100%'
	},
	infoText: {
		fontSize: 14,
		lineHeight: 20,
		fontFamily: "NotoSans_400",
	},
	infoTextBold: {
		fontSize: 16,
		lineHeight: 20,
		fontFamily: "NotoSans_700",
		marginBottom: 10

	}
});
