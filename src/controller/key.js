import { Key } from '../models'
import { success, error, ERROR_MESSAGE } from '../utils'

// This method is used to fetch the key value by its key name
export const fetchKeyByID = async (req, res) => {
  try {
    const {
      key,
    } = req.params

    // Check if the key is present in the query params
    if (!key) {
      const e = {
        message: ERROR_MESSAGE.NOT_FOUND_KEY,
      }
      return error(res, e)
    }
    // Query the DB with the key to get all the information
    const result = await Key.findOne({key})

    // Show Error if the Key is not found
    if (!result) {
      const e = {
        message: ERROR_MESSAGE.NOT_FOUND_KEY,
      }
      return error(res, e)
    }

    return success(res, result)
  } catch (error) {
    const e = {
      message: error.message,
    }
    return error(res, e)
  }
}

// This function is used to upsert key value
export const upsertKeyValue = async (req, res) => {
  try {
    const {
      key,
      value
    } = req.body

    // This will check if both key and value is present
    if (!key || !value) {
      const e = {
        message: ERROR_MESSAGE.KEY_FIELD_MISSING,
      }
      return error(res, e)
    }

    const query = {key}
    const data = {
      key,
      value,
    }
    const result = await Key.findOneAndUpdate(query, data, {upsert: true})
    if (!result) {
      const e = {
        message: ERROR_MESSAGE.ERROR_UPSERT_KEY,
      }
      return error(res, e)
    }

    const response = {
      message: "Stored Successfully"
    }
    return success(res, response)
  } catch (error) {
    const e = {
      message: error.message,
    }
    return error(res, e)
  }
}
