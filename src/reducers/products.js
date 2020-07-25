import {
    PRODUCTS_LOADED,
    PRODUCTS_NOT_LOADED,
    SEARCH_TEXT
} from '../actions/types'

const initialState = {
    productObjects: {},
    searchText: "",
    products: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action

    switch (type) {
        case PRODUCTS_LOADED:
            return {
                ...state,
                searchText: '',
                    products: payload,
                    loading: false

            }
            case SEARCH_TEXT:
                return {
                    ...state,
                    searchText: payload

                }

                case PRODUCTS_NOT_LOADED:
                    return {
                        ...state,
                        products: [],
                            error: payload,
                            loading: false
                    }

                    default:
                        return state
    }
}