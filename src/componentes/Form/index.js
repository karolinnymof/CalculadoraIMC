import { View,TextInput,Text,TouchableOpacity} from 'react-native'
import styles from './style'

const Form = ()=>{
    return ( 
        <View style={styles.formContext} >
            <View style={styles.form}>
                <Text style={styles.formLabel} >Altura</Text>
                <TextInput
                    style={styles.input}
                    placeholder='Ex: 1.70'
                    keyboardType='numeric'
                />
                <Text style={styles.formLabel} >Peso</Text>
                <TextInput
                style={styles.input}
                placeholder='Ex: 60.30'
                keyboardType='numeric'
                />
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>CALCULAR</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

export default Form