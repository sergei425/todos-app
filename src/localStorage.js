export const loadState = () => {
    try {
        const savedState = localStorage.getItem('state')
        if (savedState === null) {
            return []
        }
        return JSON.parse(savedState)
    } catch (_) {
        return []
    }
}
export const saveState = (state) => {
    try {
        const stateToSaved = JSON.stringify(state)
        localStorage.setItem('state', stateToSaved)
    } catch (error) {
        console.error(error);
    }
}