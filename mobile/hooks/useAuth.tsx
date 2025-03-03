import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const carregarUser = async () => {
      try {
        const user = await AsyncStorage.getItem('isLoggedIn');
        setIsAuthenticated(!!user);
      } catch (erro) {
        console.error('Erro ao carregar user:', erro);
      } finally {
        setIsLoading(false);
      }
    };

    carregarUser();
  }, []);

  return { isAuthenticated, isLoading };
}
