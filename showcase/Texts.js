import {Text, View} from 'react-native';
import {css} from 'klazify';

export default function Texts() {

    return <View>
        <Text style={css('text h1')}>
            {'Typography'}
        </Text>

        <Text style={css('text h1')}>
            {'Title H1'}
        </Text>

        <Text style={css('text h2')}>
            {'Title H2'}
        </Text>

        <Text style={css('text h3')}>
            {'Title H3'}
        </Text>

        <Text style={css('text h4')}>
            {'Title H4'}
        </Text>

        <Text style={css('text h5')}>
            {'Title H5'}
        </Text>

        <Text style={css('text h6')}>
            {'Title H6'}
        </Text>

        <View style={css("")}>
            <Text style={css('text text-xxl py-1')}>
                {'text-xxl'}
            </Text>
            <Text style={css('text text-xl py-1')}>
                {'text-xl'}
            </Text>
            <Text style={css('text text-lg py-1')}>
                {'text-lg'}
            </Text>
            <Text style={css('text text-md py-1')}>
                {'text-md'}
            </Text>
            <Text style={css('text text-bold py-1')}>
                {'text-bold'}
            </Text>
            <Text style={css('text text-sm py-1')}>
                {'text-sm'}
            </Text>
            <Text style={css('py-1 custom-font text-green')}>
                {'Custom '}
                <Text style={css("text-warning")}>
                    {"font "}
                    <Text style={css("text-cyan")}>
                        {"defined "}
                        <Text style={css("text-red")}>
                            {"at "}
                            <Text style={css("text-indigo")}>
                                {"App "}
                                <Text style={css("text-primary")}>
                                    {"startup"}
                                </Text>
                            </Text>
                        </Text>
                    </Text>
                </Text>
            </Text>
        </View>
    </View>;

}
