import {View,Text,Button,TextInput} from 'react-native'
import {getTheRickandMorty} from './../../../serviços/apii2'
import {useEffect, useState} from 'react' 

export function VerTheRickandMorty() {
    const [TheRickandMorty, setTheRickandMorty] = useState('')
    const [nome, setNome] = useState('')
    async function carregarTheRickandMorty() {
        const TheRickandMorty = await getTheRickandMorty(nome)
        setTheRickandMorty(TheRickandMorty)
        console.log(TheRickandMorty)
    }
    return(
        <View>
            <TextInput onChangeText={setNome} placeholder='nome...'/>
            {nome!=''?<View>
                        <Text>{TheRickandMorty.name}</Text>
                        <Text>{TheRickandMorty.status}</Text>
                        <Text>{TheRickandMorty.species}</Text>
                        <Text>{TheRickandMorty.type}</Text>
                        <Text>{TheRickandMorty.gender}</Text>
                    </View>:<Text></Text>}
            <Button title='clique'onPress={carregarTheRickandMorty} />
        </View>
    )
}




