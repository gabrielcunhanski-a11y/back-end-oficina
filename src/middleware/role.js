const requireRole = (role) => (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ error: "Token não fornecido" });
    }

    if (req.user.type !== role) {
        return res.status(403).json({ error: "Acesso não autorizado" });
    }

    next();
};

export default requireRole;
