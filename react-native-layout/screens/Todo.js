import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoScreen() {
    const [task, setTask] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [todoList, setTodoList] = useState([
        { id: '1', text: 'Draft wireframes for project', completed: true },
        { id: '2', text: 'Sketch new logo ideas', completed: false },
    ]);

    const handleAddTask = () => {
        if (task.trim().length === 0) return;
        const newTodo = {
            id: Date.now().toString(),
            text: task,
            completed: false,
        };
        setTodoList([...todoList, newTodo]);
        setTask('');
        Keyboard.dismiss();
    };

    const deleteTask = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id));
    };

    const toggleTask = (id) => {
        setTodoList(
            todoList.map((item) =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    const filteredTodos = todoList.filter((item) =>
        item.text.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const renderTodoItem = ({ item }) => (
        <View style={styles.itemCard}>
            <TouchableOpacity onPress={() => toggleTask(item.id)} style={styles.itemLeft}>
                <Ionicons
                    name={item.completed ? "checkbox-outline" : "square-outline"}
                    size={28}
                    color="#000"
                />
                <Text style={[styles.itemText, item.completed && styles.completedText]}>
                    {item.text}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Ionicons name="trash-outline" size={28} color="#000" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.title}>TO-DO LIST</Text>

                {/* Search Bar */}
                <View style={styles.searchSection}>
                    <Ionicons name="search-outline" size={20} color="#000" style={styles.searchIcon} />
                    <TextInput
                        style={styles.searchInput}
                        placeholder="Search notes..."
                        placeholderTextColor="#666"
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                </View>
            </View>

            {/* List Section */}
            <View style={styles.listContainer}>
                <FlatList
                    data={filteredTodos}
                    renderItem={renderTodoItem}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 120 }}
                />
            </View>

            {/* Input Section */}
            <KeyboardAvoidingView
                behavior='padding'
                style={styles.writeTaskWrapper}
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={'Add todos...'}
                        placeholderTextColor="#666"
                        value={task}
                        onChangeText={(text) => setTask(text)}
                    />
                    <TouchableOpacity onPress={() => handleAddTask()}>
                        <View style={styles.addWrapper}>
                            <Ionicons name="add-outline" size={28} color="white" />
                        </View>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF', 
    },
    header: {
        paddingTop: 60,
        paddingHorizontal: 25,
        paddingBottom: 20,
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 40,
        fontWeight: '900',
        color: '#000',
        letterSpacing: -1,
        fontFamily: Platform.OS === 'ios' ? 'Noteworthy' : 'monospace',
        textDecorationLine: 'underline',
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFF',
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 2, 
        paddingHorizontal: 15,
        height: 45,
        marginTop: 10,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'Noteworthy' : 'monospace',
    },
    listContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        padding: 15,
        borderWidth: 3,
        borderColor: '#000',
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
        elevation: 5,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    itemText: {
        fontSize: 18,
        color: '#000',
        marginLeft: 12,
        fontWeight: '600',
        fontFamily: Platform.OS === 'ios' ? 'Noteworthy' : 'monospace',
    },
    completedText: {
        textDecorationLine: 'line-through',
        color: '#888',
        fontStyle: 'italic',
    },
    writeTaskWrapper: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
        paddingHorizontal: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        backgroundColor: '#FFF',
        borderWidth: 3,
        borderColor: '#000',
        width: '80%',
        fontSize: 16,
        fontFamily: Platform.OS === 'ios' ? 'Noteworthy' : 'monospace',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 0,
    },
    addWrapper: {
        width: 50,
        height: 50,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 4, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 0,
    },
});