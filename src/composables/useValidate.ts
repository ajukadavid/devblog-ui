import { reactive, computed } from 'vue'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
import useValidate from '@vuelidate/core'

const customPasswordValidator = (value:string) =>{
    const containsUppercase = /[A-Z]/.test(value)
    const containsLowercase = /[a-z]/.test(value)
    const containsNumber = /[0-9]/.test(value)
    const containsSpecial = /[#?!@$%^&*-]/.test(value)
    return containsUppercase && containsLowercase && containsNumber && containsSpecial
  }

export function validateSignUp() {
    const form = reactive({
        username: '' as undefined | string,
        email: '' as undefined | string,
    })

    const rules = computed(() => {
        return {
            email: { required, email },
            username: { 
                required, 
                minLength: minLength(3) 
                
            },

        }
    })

    const v$ = useValidate(rules, form)

    return {
        form,
        v$,
    }
}



export function validatePassword() {
    const passwords = reactive({
        password: '' as undefined | string,
        confirm_password: '' as undefined | string,
    })

    const rules = computed(() => {
        return {
        password: { 
            required,
            minLength: minLength(5),
            valid: helpers.withMessage(
                'Must contain at least 1 numbers, symbol, upper and lower case letters',
                customPasswordValidator
            ),
        },
            confirm_password: { 
                required, 
                valid: helpers.withMessage('Passwords do not match', sameAs(passwords.password))
            },

        }
    })

    const vp$ = useValidate(rules, passwords)

    return {
        passwords,
        vp$,
    }
}


export function validateLogin() {
    const form = reactive({
        username: '' as undefined | string,
        password: '' as undefined | string,
    })

    const rules = computed(() => {
        return {
            password: { required },
            username: { 
                required, 
                minLength: minLength(3) 
                
            },

        }
    })

    const v$ = useValidate(rules, form)

    return {
        form,
        v$,
    }
}