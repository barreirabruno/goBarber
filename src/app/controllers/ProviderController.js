import User from '../models/User';
import Files from '../models/Files';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: {
        provider: true,
      },
      attributes: ['id', 'name', 'email', 'avatar_id'],
      include: [
        {
          model: Files,
          as: 'avatar',
          attributes: ['name', 'path', 'url'],
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
