import { getAuthCode, getLastPing, storeAuthCode } from '../services/authCodeService';

class AuthReceiverController {
  async storeAuthCode(req, res) {
    try {
      const { authCode } = req.body;
      const result = storeAuthCode(authCode);
      return res.status(200).json({ msg: result });
    } catch (error) {
      console.log(`storeAuthCode -> ${error}`);
      return res.status(500).json({ err: 'Erro' });
    }
  }

  async getAuthCode(req, res) {
    try {
      const result = getAuthCode();
      if (result) {
        return res.status(200).json({ authCode: result });
      }
      return res.status(200).json({ msg: 'Empty' });
    } catch (error) {
      console.log(`getAuthCode -> ${error}`);
      return res.status(500).json({ err: 'Erro' });
    }
  }

  async getLastPing(req, res) {
    try {
      const result = getLastPing();
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(200).json({ msg: 'Empty' });
    } catch (error) {
      console.log(`getLastPing -> ${error}`);
      return res.status(500).json({ err: 'Erro' });
    }
  }
}

export default new AuthReceiverController();
