const express = require("express");
const {
  profileData,
  profileAdd,
  profileUpdate,
  fetchProfile,
} = require("../controllers/profileController");
const upload = require("../middleware/multer");
//controlers

const router = express.Router();

router.param("profileId", async (req, res, next, profileId) => {
  const foundProfile = await fetchProfile(profileId, next);
  if (foundProfile) {
    req.profile = foundProfile;
    next();
  } else {
    next({
      status: 404,
      message: "Profile not found",
    });
  }
});

//route path
router.get("/:profileId", profileData);
// Add
router.post("/", upload.single("profileImage"), profileAdd);
//update
router.put("/:profileId", upload.single("profileImage"), profileUpdate);

module.exports = router;
