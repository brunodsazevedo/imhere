import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export function Home() {
  const participant = [
    'Bruno',
    'Micheli',
    'Rebeca',
    'Mãe',
    'Pai',
    'Vô',
    'Tio',
    'Tia',
    'Biso',
    'Bisa',
    'Tatara'
  ]

  function handleParticipantAdd() {
    console.log('aqui');
    
  }
  function handleParticipantRemove(name: string) {

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.eventName}>
          Nome do evento
        </Text>

        <Text style={styles.eventDate}>
          Sexta, 4 de Novembro de 2022
        </Text>

        <View style={styles.form}>
          <TextInput
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
            style={styles.input}
          />

          <TouchableOpacity
            onPress={handleParticipantAdd}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={participant}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <Participant
              name={item}
              onRemove={() => handleParticipantRemove(item)}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
            </Text>
          )}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}
