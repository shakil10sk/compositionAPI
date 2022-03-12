import {ref} from 'vue'
// export default function useCounter(){
export default function useCounter(initialCount = 0,stepSize = 1){
    // const count = ref(0);
    const count = ref(initialCount);

    function increementcount(){
            // count.value += 1;
            count.value += stepSize;
        }

        return{
            count,increementcount
        }
}