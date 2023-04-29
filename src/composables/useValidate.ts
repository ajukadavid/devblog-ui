import { reactive, computed } from 'vue'
import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'

import useValidate from '@vuelidate/core'


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

