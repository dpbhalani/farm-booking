import * as mongoose from "mongoose";
import validator from "validator";
const { Schema } = mongoose;
const userSchema = new Schema({
  profile: {
    type: String,
    default:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH8AAAB/CAMAAADxY+0hAAAAMFBMVEXk5ueutLeqsLPf4ePn6eqzuLvZ3N3c3+DU19m7wMPDx8nKztDGysy3vL+mrbDP0tSZIifbAAACuklEQVRoge2a227sIAxFuRgSciH//7eFZqadahJiZ2yQKpb60vNw9rYxhpgq1el0Op1Op9PpdDo4ANopJ+nBe2+hvgkAuwVnYkw/0azTqGpaADUGY/Qv6ZdpqOYARvcq/rQQbBUHYEN8U98dzBUMwPge+48DJ14GMB0H/yB6WQMwnUe/p2CUNHApnxA0AMu1vNaDmPyGkddGLAEoea2DjAEIOHmhGgRf3Hl/EJBXyqHlJRohsvjEEgArQd5s7AkYKOFrx62Paz2/CeBuQkBRTyzMCbCk8LVeefVhJMbP3IRhIepHy6uP7b0/8fP2YMA3v4c+bwuklj/3BqDrT7z6xO3Hrt86frI+8/q3rv/W+38i6nP3v8JX33H8/+v8a37+t77/KE8Kn/3+1/z+S9sB3OqZtt8/KQHo7z/Hr64IPThKjUDafv+j5x8y6go3fhJoPSQDjQdwsvKXBozw/DMX4XkbMK7CCPx0/i3T9o4cNJ3/q+/3j/Xt/UN85f84ADsHnR9/8vuPq/z+87AAynrvh/z+VVd9F7R22LH2+U81pJOwn6ewuu91N7kOnFtDWEarhE2k/96nZU8rfrT7YtQhF4LU6ZdKbo1XdxAT3eIFLMAwH2z6Ew95M3JayO+dmnL9NNptbDsSYEOH/mphYXGQ1EmhvzgwDA4Oez3ewfyZg3TW3RbfHbhPjoWU+o8x090UgAr3U/9iwN37ywDwHOqZeOdeQntvKmPow0CY+eSTgUCVp407rg3Q5kGoDx0alIkIb/If4DNAHvahMOiRmBVQ1/ihEHnWjAY1k+Uu/RdQNUidtBLArAB50k7iWn7A/5UDnesvVNnwrxMwyMpfJUCw+HfWi/jF9v6T8nSM7c5xRnkBOC8dJxSPIenqz5TST3/mJFMej8rr67EgPxhxYvEMsBUo5b/T6XQ6lfgCTUsfzXJsDUQAAAAASUVORK5CYII=",
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: [validator.isEmail],
  },
  role: {
    type: String,
  },
  dob: {
    type: String,
  },
});
const User = mongoose.model("User", userSchema);
export default User;
//# sourceMappingURL=userModel.js.map
