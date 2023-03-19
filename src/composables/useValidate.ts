import { reactive, computed } from 'vue'
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'
import useValidate from '@vuelidate/core'


const isPasswordValid  = (value:string) => {
    const containsUppercase = /[A-Z]/.test(value)
    const containsLowercase = /[a-z]/.test(value)
    const containsNumber = /[0-9]/.test(value)
    const containsSpecial = /[#?!@$%^&*-]/.test(value)
    return !containsUppercase || !containsLowercase || !containsNumber || !containsSpecial
  }

export function validateUpdateProfile() {
    const form = reactive({
        username: '' as undefined | string,
        email: '' as undefined | string,
        password: '' as undefined | string,
        confirm_password: '' as undefined | string,
    })

    const rules = computed(() => {
        return {
            email: { required, email },
            username: { 
                required, 
                minLength: minLength(3) 
                
            },
            password: { required, minLength: minLength(10), isPasswordValid },
            confirm_password: { required, minLength: minLength(3), sameAs: (form.password) },
        }
    })

    const v$ = useValidate(rules, form)

    return {
        form,
        v$,
    }
}