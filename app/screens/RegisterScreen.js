import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/core';
import { showMessage, hideMessage } from 'react-native-flash-message';

import FormBackground from '../components/FormBackground';
import FormInput from '../components/FormInput';
import AppButton from '../components/AppButton';

import registerScreenData from '../data/registerScreenData';
import { API_KEY } from '@env';

const RegisterScreen = ({ registerData, setRegisterData }) => {
  const navigation = useNavigation();
  const language = registerData.language;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const registerOptions = {
    name: {
      required: registerScreenData.errors.name.required[language],
      pattern: {
        value: /^((\b[a-zA-Z]{1,40}\b)\s*){2,}$/,
        message: registerScreenData.errors.name.pattern[language],
      },
    },
    adress: {
      required: registerScreenData.errors.adress.required[language],
      pattern: {
        value: /.*\S.*/,
        message: registerScreenData.errors.adress.required[language],
      },
    },
    email: {
      required: registerScreenData.errors.email.required[language],
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: registerScreenData.errors.email.pattern[language],
      },
    },
    password: {
      required: registerScreenData.errors.password.required[language],
      minLength: {
        value: 6,
        message: registerScreenData.errors.password.minLength[language],
      },
    },
  };

  const onSubmit = async ({
    name,
    adress,
    email,
    password,
    passwordRepeat,
  }) => {
    if (password !== passwordRepeat) {
      showMessage({
        message: language === 'sr' ? 'Greška' : 'Error',
        description:
          language === 'sr' ? 'Šifre se ne poklapaju' : 'Password do not match',
        color: 'white',
        style: {
          backgroundColor: 'red',
          paddingTop: 15,
        },
        textStyle: styles.errorText,
        titleStyle: styles.errorText,
        onPress: () => hideMessage(),
      });
      return;
    }

    const [first_name, ...rest] = name.split(' ');
    const last_name = rest.join(' ');

    const complete_data = {
      ...registerData,
      current_body_id: 1, //stavljam 1 da ne bi bilo greske
      desired_body_id: 1, //(korisceni podaci iz data foldera, a ne iz baze zbog dizajna)
      activity_level_id: 1,
      first_name: first_name,
      last_name: last_name,
      address: adress.trim(),
      email: email,
      password: password,
    };

    const response = await fetch(
      'https://fitness.dev2.nbgcreator.com/api/register',
      {
        method: 'POST',
        headers: {
          'X-API-KEY': API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(complete_data),
      }
    );

    const data = await response.json();

    if (data.status === 200) {
      navigation.navigate('LogIn');
    } else Alert.alert('Greška', 'Došlo je do greške pri registaciji');
  };

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  return (
    <ImageBackground
      source={require('../../assets/register-background.jpg')}
      style={styles.backgroundImage}
    >
      <FormBackground>
        <Text style={styles.headerText}>
          {registerScreenData.header[language]}
        </Text>
        <View style={styles.form}>
          {registerScreenData.inputs.map((item) => {
            return (
              <Controller
                key={item.id}
                control={control}
                rules={registerOptions[item.name]}
                render={({ field: { onChange, onBlur, value } }) => (
                  <FormInput
                    name={item.name}
                    placeholder={item.placeholder[language]}
                    icon={item.icon}
                    material={item.material}
                    textContentType={item.textContentType}
                    value={value}
                    onChangeText={(text) => {
                      if (item.name === 'email') {
                        onChange(text.trim());
                      } else onChange(text);
                    }}
                    secureTextEntry={item.secureTextEntry}
                    autoCorrect={false}
                    autoCapitalize={item.autocapitalize}
                  />
                )}
                name={item.name}
                defaultValue=""
              />
            );
          })}
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={handleSubmit(onSubmit)}
            visible={true}
            style={{ alignItems: 'center', width: '100%' }}
          >
            {registerScreenData.button[language]}
          </AppButton>
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              {registerScreenData.login.question[language]}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
              <Text
                style={[styles.loginText, { textDecorationLine: 'underline' }]}
              >
                {registerScreenData.login.button[language]}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </FormBackground>
      {!isEmpty(errors) ? (
        <Text style={styles.error}>
          {errors.name
            ? errors.name.message
            : errors.adress
            ? errors.adress.message
            : errors.email
            ? errors.email.message
            : errors.password?.message}
        </Text>
      ) : null}
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    opacity: 0.9,
    backgroundColor: 'white',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  form: {
    width: '90%',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 5,
  },
  loginText: {
    fontSize: 19,
    marginVertical: 3,
    marginHorizontal: 3,
  },
  buttonContainer: {
    alignItems: 'center',
    position: 'absolute',
    bottom: '5%',
    width: '90%',
  },
  error: {
    position: 'absolute',
    backgroundColor: 'red',
    width: '100%',
    paddingTop: '15%',
    paddingBottom: '5%',
    paddingHorizontal: '5%',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  errorText: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
