import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

interface LoadingScreenProps {
    startAsync: () => Promise<void>;
    onFinish: () => void;
    onError: (error: Error) => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ startAsync, onFinish, onError }) => {
    useEffect(() => {
        const loadResources = async () => {
            try {
                await startAsync();
                onFinish();
            } catch (error) {
                onError(error as Error);
            }
        };

        loadResources();
    }, [startAsync]);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text style={styles.text}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        marginTop: 16,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoadingScreen;
