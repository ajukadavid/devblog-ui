import { reactive, computed } from 'vue'
import { required, email, minLength, helpers, sameAs } from '@vuelidate/validators'
import useValidate from '@vuelidate/core'


export function validateSignUp() {
    const form = reactive({
        username: '' as undefined | string,
        email: '' as undefined | string,
        password: '' as string,
        confirm_password: '' as undefined | string,
    })

    const rules = computed(() => {
        return {
            email: { required, email },
            username: { 
                required, 
                minLength: minLength(3) 
                
            },
            confirm_password: { required, minLength: minLength(3), sameAs: (form.password) }
        }
    })

    const v$ = useValidate(rules, form)

    return {
        form,
        v$,
    }
}