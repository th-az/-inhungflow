/**
 * LUMIFLOWER DATA REPOSITORY
 * Chứa dữ liệu chi tiết về 15 loài hoa theo đúng bảng mẫu LumiFlower của người dùng,
 * câu chuyện văn hóa, thư viện trưng bày và thông tin học tập.
 * Toàn bộ hình ảnh sử dụng trực tiếp từ bảng ảnh hoa chuẩn của thương hiệu.
 */

const LUMI_FLOWERS = [
  {
    id: "cam-tu-cau",
    name: "Hoa cẩm tú cầu",
    scientificName: "Hydrangea macrophylla",
    category: "cam-tu-cau",
    colors: "Xanh da trời, Trắng ngọc, Hồng phớt, Tím pastel",
    season: "Tháng 5 – Tháng 8",
    meaning: "Sự biết ơn và chân thành",
    characteristics: "Cánh hoa nhỏ li ti kết thành cụm hoa hình cầu bồng bềnh như đám mây. Màu sắc hoa biến đổi kỳ diệu theo độ pH của đất trồng.",
    shortDesc: "Sự biết ơn và chân thành – từng chùm hoa xanh biếc dệt nên từ sương mai và mây trời.",
    heroImage: "assets/images/flowers/cam-tu-cau.jpg",
    thumbImage: "assets/images/flowers/cam-tu-cau.jpg",
    quote: "Cẩm tú cầu không chỉ là một loài hoa, mà là khúc ca của những cảm xúc chân thành nhất được dệt nên từ sương mai và mây trời.",
    detailOverview: "Hoa cẩm tú cầu (Hydrangea) là một trong những loài hoa được yêu mến nhất nhờ cấu trúc hoa dạng vòm độc đáo và sắc thái màu biến ảo. Những cánh hoa mỏng manh đan cài sát nhau biểu trưng cho sự hòa thuận, gắn bó khăng khít và lòng tri ân chân thành. Tại Việt Nam, cẩm tú cầu nở rực rỡ nhất tại vùng cao nguyên Đà Lạt mờ sương, nơi khí hậu mát lành nuôi dưỡng từng chùm hoa căng tràn sức sống.",
    story: "Truyền thuyết Nhật Bản kể rằng, một vị hoàng đế xưa kia vì mải mê công việc triều chính mà lỡ làm tổn thương người con gái mình thương. Để tạ lỗi và bày tỏ tấm lòng hối tiếc chân thành, ngài đã đích thân mang tặng nàng một đóa cẩm tú cầu xanh biếc. Kể từ đó, cẩm tú cầu trở thành biểu tượng thiêng liêng của sự thứ tha, lòng biết ơn và sự kết nối chân thật giữa hai tâm hồn.",
    facts: [
      "Độ pH của đất quyết định màu sắc: Đất chua (pH < 6.0) tích tụ ion nhôm tự do biến hoa thành màu xanh da trời; đất trung tính tạo màu tím pastel; đất kiềm (pH > 7.0) cho ra sắc hồng dịu.",
      "Tên khoa học Hydrangea bắt nguồn từ tiếng Hy Lạp cổ ('hydro' = nước và 'angeion' = chiếc bình đựng nước), phản ánh nhu cầu nước dồi dào và tình yêu với những cơn mưa trong lành.",
      "Mỗi 'cánh hoa' cẩm tú cầu rực rỡ thực chất là các lá đài biến đổi chức năng (sepals) để thu hút ong bướm, trong khi bông hoa thật sự chỉ là một hạt nhụy bé xíu ở chính giữa chùm hoa."
    ],
    botanicalParts: [
      { name: "Cánh hoa / Lá đài (Sepals)", desc: "Bộ phận rực rỡ nhất, dạng hình khiên mỏng manh, chứa sắc tố anthocyanin đổi màu theo độ pH của đất." },
      { name: "Nhị hoa (Stamens)", desc: "Kích thước rất nhỏ nằm ẩn trong tâm hoa thật, mang bao phấn màu kem nhạt cung cấp phấn hoa." },
      { name: "Nhụy hoa (Pistil)", desc: "Trung tâm tiếp nhận phấn hoa, hình thành quả nang nhỏ sau mùa thụ phấn thành công." },
      { name: "Đài hoa (Calyx)", desc: "Phần đế xanh nâng đỡ chùm lá đài, giúp hoa giữ vững phom dáng tròn đầy tự nhiên." },
      { name: "Cuống hoa (Pedicel)", desc: "Mạng lưới phân nhánh thanh mảnh tỏa đều từ cành chính, dẫn truyền nước dồi dào nuôi từng đóa hoa." },
      { name: "Lá hoa (Foliage)", desc: "Lá to bản, mép có răng cưa nhuyễn, xanh đậm bóng bẩy giúp điều hòa thoát hơi nước." },
      { name: "Thân cành (Stem)", desc: "Thân thảo hóa gỗ cứng cáp, mang nhiều mắt mầm khỏe khoắn cho các mùa hoa kế tiếp." }
    ]
  },
  {
    id: "hoa-hong",
    name: "Hoa hồng",
    scientificName: "Rosa",
    category: "hoa-hong",
    colors: "Hồng pastel, Trắng ngọc, Đỏ thắm, Vàng mơ",
    season: "Quanh năm (rộ nhất mùa Thu - Đông)",
    meaning: "Biểu tượng của tình yêu và sự trân trọng",
    characteristics: "Cánh hoa xếp lớp đồng tâm mềm mịn như nhung, hương thơm thanh khiết thoang thoảng, thân có gai tự nhiên chở che mầm hoa.",
    shortDesc: "Biểu tượng của tình yêu và sự trân trọng – vẻ đẹp vượt thời gian với các lớp cánh xếp xoắn ốc hoàn mỹ.",
    heroImage: "assets/images/flowers/hoa-hong.jpg",
    thumbImage: "assets/images/flowers/hoa-hong.jpg",
    quote: "Một đóa hồng không cần nói lên lời thề hẹn, chính sự e ấp và thanh thoát của nó đã là ngôn ngữ đẹp nhất của tình yêu.",
    detailOverview: "Hoa hồng từ lâu đã được mệnh danh là nữ hoàng của vương quốc hoa. Với kết cấu hình xoắn ốc theo tỷ lệ vàng Fibonacci, mỗi đóa hồng là một kiệt tác hình học của tự nhiên. Tại LumiFlower, chúng tôi đặc biệt trân quý những giống hoa hồng mang tông màu pastel xanh khói, hồng phấn và trắng kem nhã nhặn.",
    story: "Trong thần thoại Hy Lạp, hoa hồng trắng được sinh ra từ bọt biển tinh khôi khi nữ thần Aphrodite bước lên bờ cát. Khi nàng vội vã chạy qua bụi gai cứu người yêu, một giọt máu nhỏ xuống đã nhuộm đóa hồng trắng thành sắc hồng thắm dịu dàng, biến loài hoa này thành biểu trưng vĩnh cửu của sự gắn kết.",
    facts: [
      "Hóa thạch hoa hồng cổ đại có niên đại hơn 35 triệu năm được phát hiện tại vùng núi Colorado, chứng minh hoa hồng đã đồng hành cùng trái đất từ kỷ nguyên xa xưa.",
      "Cấu trúc cánh hoa hồng tuân thủ nghiêm ngặt chuỗi số Fibonacci, giúp tối ưu hóa diện tích hứng ánh sáng mặt trời và lưu giữ hạt sương đêm.",
      "Tinh dầu hoa hồng tự nhiên chứa hơn 300 phân tử hương thơm, có tác dụng điều hòa nhịp thở và kích thích sản sinh endorphin."
    ],
    botanicalParts: [
      { name: "Cánh hoa (Petals)", desc: "Xếp so le từ 20 đến 50 lớp cánh nhung mịn, lưu giữ tinh dầu thơm tự nhiên." },
      { name: "Nhị hoa (Stamens)", desc: "Hàng chục nhị vàng óng ánh bao bọc quanh tâm, tỏa phấn thơm thu hút ong bướm." },
      { name: "Nhụy & Noãn (Carpels)", desc: "Nằm sâu trong đế hoa hình chén, phát triển thành quả tầm xuân giàu vitamin C." },
      { name: "Đài hoa (Sepals)", desc: "Năm lá đài xanh nhọn bao bọc bảo vệ búp non trước khi hoa bung nở kiêu hãnh." },
      { name: "Gai hoa (Prickles)", desc: "Các biến đổi biểu bì nhọn sắc giúp cành hoa tựa vào các cành cây khác." },
      { name: "Lá kép lông chim", desc: "Mỗi cuống mang 3-5 lá chét viền răng cưa, bề mặt bóng mờ quang hợp mạnh mẽ." },
      { name: "Cuống & Cành chính", desc: "Mạch dẫn dẻo dai luân chuyển khoáng chất nuôi hoa nở lâu bền." }
    ]
  },
  {
    id: "hoa-tulip",
    name: "Hoa tulip",
    scientificName: "Tulipa",
    category: "hoa-tulip",
    colors: "Hồng phấn, Trắng tuyết, Xanh nhạt, Vàng hoàng hôn",
    season: "Mùa xuân (Tháng 3 – Tháng 5)",
    meaning: "Lời nhắn của mùa xuân",
    characteristics: "Dáng hoa hình chén vươn thẳng kiêu hãnh, cánh hoa căng mọng thanh khiết, lá xanh thuôn dài ôm trọn lấy thân hoa.",
    shortDesc: "Lời nhắn của mùa xuân – vươn mình kiêu hãnh đón nắng mai, biểu trưng cho khởi đầu tươi sáng.",
    heroImage: "assets/images/flowers/hoa-tulip.jpg",
    thumbImage: "assets/images/flowers/hoa-tulip.jpg",
    quote: "Sau mùa đông lạnh giá, một đóa tulip hé nở chính là lời hứa dịu dàng nhất rằng mùa xuân ấm áp đã thực sự trở về.",
    detailOverview: "Hoa tulip thuộc họ Hành tỏi (Liliaceae), nổi tiếng với đường nét tối giản, hiện đại và thanh lịch. Mỗi bông hoa thường chỉ có một thân đơn vươn thẳng từ củ ngầm, mang lại cảm giác cân đối, tĩnh tại và tràn đầy hy vọng trong không gian trưng bày.",
    story: "Khởi nguồn từ những sườn núi hoang dã Trung Á, tulip từng du hành qua đế chế Ottoman trước khi cập bến châu Âu và tạo nên cơn sốt lịch sử 'Tulip Mania'. Giá trị đích thực của đóa tulip vẫn nằm ở vẻ đẹp tự nhiên không gợn chút âu lo khi vươn mình đón nắng sớm.",
    facts: [
      "Hiện tượng sinh trưởng tế bào lệch: Hoa tulip vẫn tiếp tục dài thêm 2-5cm ngay cả sau khi đã cắm vào bình nước và tự xoay về phía ánh sáng.",
      "Cánh hoa tulip thực chất là lá bao hoa (tepals), gồm 3 cánh hoa và 3 lá đài có hình dáng và sắc màu giống hệt nhau.",
      "Củ tulip chứa chất dự trữ dinh dưỡng giúp cây ngủ đông suốt mùa tuyết giá mà không hề bị thối rữa."
    ],
    botanicalParts: [
      { name: "Lá bao hoa (Tepals)", desc: "6 phiến hoa trơn bóng hình chén, khép lại khi trời tối lạnh và xòe nhẹ khi đón ánh ban mai." },
      { name: "Nhị hoa (Stamens)", desc: "6 nhị lớn mang bao phấn màu đen hoặc nâu sô-cô-la tương phản tuyệt đẹp." },
      { name: "Đầu nhụy 3 thùy", desc: "Hình ngôi sao ba cánh nằm trực tiếp trên bầu noãn hình lăng trụ." },
      { name: "Lá hoa hình giáo", desc: "Lá mọng nước phủ lớp phấn sáp mịn, mọc ốp sát vào gốc thân tạo nét điêu khắc." },
      { name: "Thân cây đơn trục", desc: "Rỗng nhẹ ở tâm, mềm mại uốn cong theo ánh sáng tạo dáng điệu uyển chuyển." }
    ]
  },
  {
    id: "hoa-huong-duong",
    name: "Hoa hướng dương",
    scientificName: "Helianthus annuus",
    category: "hoa-huong-duong",
    colors: "Vàng ấm rực rỡ, Tâm nâu sô cô la",
    season: "Mùa hè – Mùa thu (Tháng 6 – Tháng 10)",
    meaning: "Năng lượng tích cực",
    characteristics: "Đóa hoa lớn hình mặt trời, cánh hoa vàng tươi xếp quanh tâm nhụy nâu sẫm, thân cây cao khỏe luôn vươn về phía vầng thái dương.",
    shortDesc: "Năng lượng tích cực – vầng thái dương thu nhỏ trên mặt đất, lan tỏa nguồn sinh khí dồi dào.",
    heroImage: "assets/images/flowers/hoa-huong-duong.jpg",
    thumbImage: "assets/images/flowers/hoa-huong-duong.jpg",
    quote: "Dù trong những ngày nhiều mây u ám nhất, đóa hướng dương vẫn luôn ghi nhớ hướng đi của mặt trời.",
    detailOverview: "Hoa hướng dương là biểu tượng sinh động nhất của sức sống và tinh thần hướng thượng. Cấu trúc tâm hoa là một trong những ví dụ mẫu mực nhất về hình học fractal tự nhiên với các đường xoắn ốc ngược chiều Fibonacci đan xen tuyệt mỹ.",
    story: "Trong thần thoại phương Tây, đóa hướng dương kiên định là biểu trưng cho tình yêu thủy chung son sắt và niềm tin không bao giờ tắt. Đó là nguồn cảm hứng bất tận của danh họa Vincent van Gogh trong những bức tranh để đời.",
    facts: [
      "Mỗi đóa hướng dương thực chất là một cụm hoa đầu quy tụ từ 1.000 đến 2.000 bông hoa con độc lập đan kết hoàn hảo.",
      "Cây hướng dương có khả năng hấp thụ kim loại nặng và độc tố từ đất mà không làm hại mô cây, giúp hồi sinh đất cằn.",
      "Khi đã nở rộ, hoa cố định quay về hướng Đông để đón ánh nắng sớm làm ấm phấn hoa nhanh nhất."
    ],
    botanicalParts: [
      { name: "Hoa cánh dạng lưỡi (Ray florets)", desc: "Vành cánh ngoài cùng màu vàng tươi, đóng vai trò như biển chỉ dẫn thu hút ong bướm." },
      { name: "Hoa hình ống ở tâm (Disc florets)", desc: "Hàng ngàn hoa nhỏ li ti xếp theo đường xoắn ốc Fibonacci sản sinh mật và hạt." },
      { name: "Đế hoa chung (Receptacle)", desc: "Tấm đệm dày hình mâm tròn nâng đỡ toàn bộ cụm hoa khổng lồ." },
      { name: "Thân cây thẳng đứng", desc: "Thân đặc chứa mô xốp dẻo dai chịu được sức nặng của mâm hoa khi kết hạt." }
    ]
  },
  {
    id: "hoa-ly",
    name: "Hoa ly",
    scientificName: "Lilium",
    category: "hoa-ly",
    colors: "Trắng ngà, Hồng dịu, Vàng mơ",
    season: "Mùa xuân – Đầu hè (Đặc biệt Tháng 4)",
    meaning: "Thanh khiết và cao quý",
    characteristics: "Cánh hoa dày dặn uốn lượn duyên dáng, nhụy hoa vươn dài kiêu sa, hương thơm nồng nàn thanh thoát lan tỏa khắp gian phòng.",
    shortDesc: "Thanh khiết và cao quý – vẻ đẹp đài các với những cánh hoa cong mềm mại và mùi hương thanh tao.",
    heroImage: "assets/images/flowers/hoa-ly.jpg",
    thumbImage: "assets/images/flowers/hoa-ly.jpg",
    quote: "Tháng Tư mang theo những gánh hoa loa kèn trắng muốt trên phố Hà Nội, như mang theo cả sự dịu êm của những ngày thanh xuân tươi đẹp.",
    detailOverview: "Hoa ly (Lilium) đại diện cho sự thanh cao, phẩm hạnh và quý phái. Đóa hoa vươn mở hình chiếc loa kèn đón gió, cánh hoa dày dặn phủ lớp nhung mờ sang trọng, là nguồn cảm hứng quen thuộc trong thi ca và hội họa Việt Nam những ngày giao mùa.",
    story: "Trong hội họa cổ điển phương Tây, đóa hoa ly trắng luôn ngự trên tay thiên thần Gabriel khi truyền tin vui. Còn tại Việt Nam, mùa hoa loa kèn trắng tháng Tư đã trở thành biểu tượng tinh thần của sự tao nhã và khúc giao mùa bình yên.",
    facts: [
      "Mỗi cành hoa ly có thể nở liên tục từ 10 đến 14 ngày nếu được cắt vát gốc và ngâm trong bình nước sạch.",
      "Người ta thường ngắt bỏ đầu bao phấn màu cam khi hoa vừa hé nở để giữ cho cánh hoa trắng muốt không bị ố vàng.",
      "Hương hoa ly có khả năng khuếch tán mạnh mẽ nhờ các aldehyde tự nhiên, mang lại cảm giác thư thái cho hệ thần kinh."
    ],
    botanicalParts: [
      { name: "Phiến hoa uốn cong", desc: "6 cánh hoa dày dặn cong ngược về phía sau tạo nên dáng hình loa kèn kiêu hãnh." },
      { name: "Bao phấn đung đưa", desc: "6 nhị hoa mang bao phấn lớn treo linh hoạt trên đỉnh cuống nhị." },
      { name: "Vòi nhụy dài", desc: "Vươn vượt lên khỏi bao phấn, đỉnh mang đầu nhụy 3 thùy ẩm ướt." },
      { name: "Thân cây thẳng tắp", desc: "Màu xanh ngọc cứng cáp nâng đỡ chùm từ 3 đến 8 đóa hoa." }
    ]
  },
  {
    id: "hoa-baby",
    name: "Hoa baby",
    scientificName: "Gypsophila paniculata",
    category: "hoa-baby",
    colors: "Trắng mây, Xanh pastel, Hồng phấn",
    season: "Quanh năm",
    meaning: "Nhỏ bé nhưng đầy ý nghĩa",
    characteristics: "Hàng ngàn bông hoa tí hon li ti bồng bềnh như màn sương tuyết, cành mảnh mai đan xen tạo cảm giác nhẹ bẫng tựa mây trời.",
    shortDesc: "Nhỏ bé nhưng đầy ý nghĩa – tựa như vầng mây trắng li ti sà xuống nhân gian.",
    heroImage: "assets/images/flowers/hoa-baby.jpg",
    thumbImage: "assets/images/flowers/hoa-baby.jpg",
    quote: "Có những điều nhỏ bé nhưng mang sức mạnh diệu kỳ, giống như đóa hoa baby – nhỏ nhắn mà sưởi ấm cả một tâm hồn.",
    detailOverview: "Hoa baby (Gypsophila) mang vẻ đẹp tinh tế, mộc mạc và mộng mơ. Dù đứng độc lập thành một cụm mây trắng bồng bềnh hay khẽ nép mình bên cạnh đóa hồng, hoa baby vẫn luôn giữ trọn nét duyên dáng thuần khiết.",
    story: "Tên tiếng Anh 'Baby's Breath' (Hơi thở của bé thơ) gợi lên cảm giác mong manh, tinh khôi và an lành tuyệt đối. Loài hoa này nhắc nhở chúng ta về vẻ đẹp của những điều giản dị xung quanh trong cuộc sống.",
    facts: [
      "Chi thực vật Gypsophila bắt nguồn từ tiếng Hy Lạp 'gypsos' (thạch cao) và 'philos' (yêu mến) vì hoa phát triển tốt nhất trên đất giàu thạch cao.",
      "Hoa baby giữ được phom dáng và sắc trắng nguyên vẹn khi phơi khô ở nơi thoáng gió.",
      "Kỹ thuật cắm hoa hiện đại có thể nhuộm màu pastel xanh dịu cho hoa baby tạo cảm giác bồng bềnh như mây trời."
    ],
    botanicalParts: [
      { name: "Đóa hoa vi mô", desc: "Mỗi bông hoa chỉ rộng từ 3 đến 8mm, gồm 5 cánh mỏng xòe tròn như bông tuyết trắng." },
      { name: "Cụm hoa ngù phân nhánh", desc: "Mạng lưới phân nhánh liên tục hàng trăm bậc tạo hiệu ứng thể tích bồng bềnh." },
      { name: "Cành mảnh như tơ", desc: "Màu xanh ngọc xám, dẻo dai và đàn hồi cực tốt khi sắp xếp bố cục." }
    ]
  },
  {
    id: "hoa-cuc",
    name: "Hoa cúc",
    scientificName: "Chrysanthemum",
    category: "hoa-cuc",
    colors: "Trắng trong trẻo, Vàng nắng, Xanh cốm",
    season: "Mùa Thu – Mùa Đông",
    meaning: "Vẻ đẹp của sự trong trẻo",
    characteristics: "Cánh hoa thon dài xếp ken dày, hương hoa mộc mạc thoang thoảng mùi thảo mộc, sức sống kiên cường bền bỉ trước sương gió.",
    shortDesc: "Vẻ đẹp của sự trong trẻo – dung dị, thanh khiết của mùa thu với sức sống dẻo dai và hương thơm an lành.",
    heroImage: "assets/images/flowers/hoa-cuc.jpg",
    thumbImage: "assets/images/flowers/hoa-cuc.jpg",
    quote: "Cúc họa mi về phố mang theo cơn gió đầu đông se lạnh, nhắc lòng người sống chậm lại để yêu thương nhiều hơn.",
    detailOverview: "Hoa cúc gắn liền với văn hóa Á Đông hàng ngàn năm như biểu tượng của người quân tử và sự bình tâm tĩnh trí. Những cánh cúc họa mi trắng ngần luôn gợi lên sự thân thuộc, ấm cúng và an nhiên trong mỗi nếp nhà Việt.",
    story: "Trong tích xưa Việt Nam, câu chuyện về người con hiếu thảo dùng tay xé những cánh hoa cúc thành muôn vàn dải cánh nhỏ để hoa có vô vàn cánh tượng trưng cho số năm mẹ được an vui là bài học cảm động về đạo hiếu.",
    facts: [
      "Hoa cúc họa mi trắng ở bãi bồi sông Hồng chỉ nở rộ duy nhất khoảng 2 đến 3 tuần mỗi dịp đầu đông.",
      "Trong bộ tranh Tứ Quý 'Tùng - Cúc - Trúc - Mai', hoa cúc đại diện cho mùa thu và khí chất thanh cao.",
      "Trà hoa cúc nguyên bông phơi khô trong bóng râm là thức uống thanh nhiệt, dưỡng tâm an thần trứ danh."
    ],
    botanicalParts: [
      { name: "Cánh hoa hình dải", desc: "Hàng chục cánh thon dài xếp vòng tròn quanh tâm đĩa, mỏng nhẹ và thanh thoát." },
      { name: "Đĩa nhụy trung tâm", desc: "Màu vàng tươi tập hợp vô số hoa hình ống tiết mật thơm dịu." },
      { name: "Lá xẻ thùy sâu", desc: "Màu xanh thẫm có viền răng cưa, vò nhẹ tỏa ra mùi hương thảo mộc sảng khoái." }
    ]
  },
  {
    id: "hoa-sen",
    name: "Hoa sen",
    scientificName: "Nelumbo nucifera",
    category: "hoa-sen",
    colors: "Hồng cánh sen, Trắng thanh bạch",
    season: "Mùa Hè (Tháng 5 – Tháng 8)",
    meaning: "Thanh cao và thuần khiết",
    characteristics: "Gần bùn mà chẳng hôi tanh mùi bùn, cánh hoa to dày thanh thoát ôm lấy đài sen ngọc ngà, tỏa hương thanh khiết ngạt ngào.",
    shortDesc: "Thanh cao và thuần khiết – quốc hoa trong lòng người Việt, vươn lên từ bùn lầy dâng cho đời sắc hương thanh tao.",
    heroImage: "assets/images/flowers/hoa-sen.jpg",
    thumbImage: "assets/images/flowers/hoa-sen.jpg",
    quote: "Trong đầm gì đẹp bằng sen, lá xanh bông trắng lại chen nhị vàng. Nhị vàng bông trắng lá xanh, gần bùn mà chẳng hôi tanh mùi bùn.",
    detailOverview: "Hoa sen là linh hồn văn hóa của người Việt, tượng trưng cho sự thanh tịnh, nghị lực vươn lên từ hoàn cảnh gian khó và lòng từ bi hỷ xả. Từ chén trà ướp sen sớm mai hồ Tây đến bức tranh sen tao nhã, loài hoa này luôn mang lại sự lắng đọng thiêng liêng.",
    story: "Trong triết lý phương Đông, hoa sen nở đại diện cho quá trình thăng hoa của tâm thức: rễ cắm sâu trong bùn đen, thân vươn qua làn nước và đóa hoa bừng nở rực rỡ đón ánh mặt trời.",
    facts: [
      "Hạt sen cổ có thể ngủ yên dưới lớp bùn sâu suốt hơn 1.300 năm mà vẫn có thể nảy mầm và nở hoa tươi tốt.",
      "Hiệu ứng tự làm sạch (Lotus Effect): Bề mặt lá và cánh sen được phủ hàng tỷ cột nhú nano sáp siêu kỵ nước giúp cuốn trôi mọi bụi bẩn.",
      "Hoa sen có khả năng điều hòa thân nhiệt sinh học: Nhiệt độ bên trong đóa sen lúc nở luôn duy trì ổn định 30–35°C."
    ],
    botanicalParts: [
      { name: "Cánh hoa thanh thoát", desc: "Phiến cánh rộng hình lòng thuyền, chuyển màu tinh tế từ trắng tinh khôi ở đáy sang hồng phớt ở đỉnh cánh." },
      { name: "Gạo sen (Túi phấn)", desc: "Hàng trăm nhị vàng mang đầu hạt gạo chứa hương thơm quý giá dùng ướp trà truyền thống." },
      { name: "Đài sen (Gương sen)", desc: "Hình chiếc nón ngược màu xanh ngọc bích nuôi dưỡng hạt sen mọng sữa." }
    ]
  },
  {
    id: "hoa-mau-don",
    name: "Hoa mẫu đơn",
    scientificName: "Paeonia",
    category: "hoa-mau-don",
    colors: "Hồng phấn, Trắng sữa, Đỏ nhung",
    season: "Mùa Xuân – Đầu Hè",
    meaning: "Sự thịnh vượng và hạnh phúc",
    characteristics: "Đóa hoa to tròn lộng lẫy, tầng tầng lớp lớp cánh hoa lượn sóng bồng bềnh, sắc thái biến chuyển nhẹ nhàng sang trọng.",
    shortDesc: "Sự thịnh vượng và hạnh phúc – vẻ đẹp đài các với hàng trăm lớp cánh mềm mại tựa váy dạ hội lộng lẫy.",
    heroImage: "assets/images/flowers/hoa-mau-don.jpg",
    thumbImage: "assets/images/flowers/hoa-mau-don.jpg",
    quote: "Mẫu đơn nở rộ như một lời chúc phúc vẹn tròn về một cuộc đời an yên, đủ đầy và tràn ngập tình yêu thương.",
    detailOverview: "Được mệnh danh là 'chúa của muôn hoa', mẫu đơn chinh phục lòng người bởi kích thước đóa hoa choáng ngợp và cách từng phiến cánh lượn sóng đan cài tựa làn mây bồng bềnh sang trọng.",
    story: "Trong truyền thuyết hoàng cung xưa, mẫu đơn tượng trưng cho sự đoan trang, quyền quý và lòng kiêu hãnh bất khuất. Loài hoa này luôn giữ nguyên khí chất tôn nghiêm, thanh thoát lạ thường.",
    facts: [
      "Một bụi cây hoa mẫu đơn có thể sống thọ và cho hoa rực rỡ qua nhiều thế hệ, có những cây cổ thụ sống hơn 150 năm.",
      "Tên khoa học Paeonia được đặt theo tên của thần y Paeon trong thần thoại Hy Lạp.",
      "Mẫu đơn thường nở vào sáng sớm và khép nhẹ cánh vào ban đêm để bảo tồn hương thơm và phấn hoa."
    ],
    botanicalParts: [
      { name: "Lớp cánh viền lượn sóng", desc: "Từ 50 đến hơn 100 phiến cánh xếp so le dày đặc, viền cánh răng cưa nhẹ tạo độ bồng bềnh." },
      { name: "Nhị vàng óng ả", desc: "Hàng trăm nhị hoa phủ bột vàng tươi ẩn hiện giữa lớp cánh nhung dày." }
    ]
  },
  {
    id: "hoa-lan",
    name: "Hoa lan",
    scientificName: "Orchidaceae",
    category: "hoa-lan",
    colors: "Tím hồng, Trắng ngọc, Xanh ngọc, Vàng hoàng yến",
    season: "Quanh năm (rộ nhất dịp Tết)",
    meaning: "Quý phái và bền bỉ",
    characteristics: "Cánh hoa đối xứng hoàn mỹ, tuổi thọ hoa nở bền bỉ suốt 2 đến 3 tháng, rễ và lá có khả năng hấp thụ ẩm không khí kỳ diệu.",
    shortDesc: "Quý phái và bền bỉ – vẻ đẹp đối xứng hoàn mỹ với tuổi thọ hoa bền bỉ và cốt cách thanh tao.",
    heroImage: "assets/images/flowers/hoa-lan.jpg",
    thumbImage: "assets/images/flowers/hoa-lan.jpg",
    quote: "Hoa lan nở không ồn ào vội vã, nó kiên nhẫn đợi đúng khoảnh khắc để hé lộ vẻ đẹp tĩnh tại và thanh tao nhất.",
    detailOverview: "Họ Lan (Orchidaceae) là một trong những kỳ quan đa dạng sinh học phong phú nhất hành tinh. Với cấu trúc cánh hoa đối xứng hai bên chuẩn mực và màu sắc biến hóa tinh vi, hoa lan luôn chiếm trọn trái tim người yêu hoa.",
    story: "Khổng Tử từng ví hương lan thoang thoảng trong thung lũng sâu với phẩm hạnh của người quân tử: 'Lan sinh nơi rừng sâu, không vì không ai thưởng mà không thơm.'",
    facts: [
      "Gia vị Vani trứ danh thế giới được chiết xuất từ quả của một loài phong lan dây leo mang tên Vanilla planifolia.",
      "Độ bền của hoa lan hồ điệp có thể kéo dài liên tục từ 60 đến 90 ngày nếu được giữ ở nhiệt độ mát mẻ."
    ],
    botanicalParts: [
      { name: "Cánh môi (Labellum / Lip)", desc: "Cánh hoa dưới biến đổi thành hình chiếc môi độc đáo làm bãi đáp cho côn trùng." },
      { name: "Cánh hoa bên (Petals)", desc: "Hai cánh hoa đối xứng ngang cân bằng hoàn mỹ, mềm mại như cánh bướm." }
    ]
  },
  {
    id: "hoa-dai",
    name: "Hoa dại",
    scientificName: "Wild Meadow Blossoms",
    category: "hoa-dai",
    colors: "Trắng đồng nội, Vàng nhạt, Xanh trời",
    season: "Mùa hè – Mùa thu",
    meaning: "Vẻ đẹp mộc mạc và tự nhiên",
    characteristics: "Những đóa hoa mọc tự do trên triền đồi bạt ngàn, cành hoa mảnh khảnh rung rinh trong gió đồng, mang sức sống bất diệt.",
    shortDesc: "Vẻ đẹp mộc mạc và tự nhiên – nét tự do, phóng khoáng của những đóa hoa hoang dã giữa đất trời.",
    heroImage: "assets/images/flowers/hoa-dai.jpg",
    thumbImage: "assets/images/flowers/hoa-dai.jpg",
    quote: "Hoa dại mọc nơi góc đồi chẳng cần ai chăm bón, vẫn bung nở rạng ngời dưới bầu trời tự do.",
    detailOverview: "Hoa dại mang trong mình vẻ đẹp tự do, mộc mạc và kiên cường nhất của thế giới tự nhiên. Không kiêu kỳ cầu kỳ, hoa dại là hiện thân của sự hồn nhiên, chất phác và tinh thần lạc quan trước mọi khắc nghiệt của thời tiết.",
    story: "Mỗi độ hè sang, những triền đồi hoa dại phủ một màu trắng ngát bên rặng núi xa xôi, trở thành điểm dừng chân thanh bình cho những tâm hồn mỏi mệt muốn tìm về sự tĩnh lặng nguyên sơ.",
    facts: [
      "Hạt giống hoa dại có lớp vỏ bảo vệ siêu bền, có thể bay theo gió hàng chục cây số và nảy mầm sau nhiều năm ngủ đông.",
      "Hoa dại là nguồn cung cấp mật chính cho các đàn ong rừng hoang dã tạo nên loại mật hoa thơm lành nhất."
    ],
    botanicalParts: [
      { name: "Cánh hoa đồng nội", desc: "Mỏng nhẹ, phản xạ ánh nắng mặt trời giúp thu hút các loài côn trùng bản địa." },
      { name: "Rễ chùm bền bỉ", desc: "Bám sâu vào các tầng đất sỏi đá giữ độ ẩm và chống xói mòn tự nhiên." }
    ]
  },
  {
    id: "hoa-theo-mua",
    name: "Hoa theo mùa",
    scientificName: "Seasonal Flora Collection",
    category: "hoa-theo-mua",
    colors: "Hồng pastel, Trắng kem, Xanh non",
    season: "Bốn mùa luân chuyển",
    meaning: "Sắc màu của từng khoảnh khắc",
    characteristics: "Sự kết hợp tinh tế giữa các loài hoa nở đúng độ theo mùa: xuân ấm, hạ rực, thu trong và đông dịu.",
    shortDesc: "Sắc màu của từng khoảnh khắc – ghi dấu sự chuyển mình nhịp nhàng của đất trời qua từng mùa hoa.",
    heroImage: "assets/images/flowers/hoa-theo-mua.jpg",
    thumbImage: "assets/images/flowers/hoa-theo-mua.jpg",
    quote: "Thời gian trôi đi trên từng cánh hoa nở, mỗi mùa hoa là một khúc ca ngắn ngủi mà lắng đọng.",
    detailOverview: "Thưởng thức hoa theo mùa là nét văn hóa truyền thống tao nhã. Việc lựa chọn hoa nở đúng thời điểm thuận theo tự nhiên giúp hoa giữ được sắc thái tươi tắn và hương thơm tròn đầy nhất.",
    story: "Người xưa ngắm hoa để đoán tiết trời: mùa hoa bưởi nồng nàn báo tin xuân về, hoa sen rộ báo hè sang, hoa cúc dịu báo thu chín và đào mai hé nụ đón tết sum vầy.",
    facts: [
      "Hoa đúng mùa có lượng tinh dầu và chất chống oxy hóa cao hơn hẳn hoa trồng trái vụ trong nhà kính.",
      "Quy trình sơ chế hoa theo mùa đòi hỏi nghệ nhân hiểu rõ độ ẩm và nhiệt độ từng tiết khí."
    ],
    botanicalParts: [
      { name: "Cành hoa tươi mùa", desc: "Được thu hoạch đúng độ tuổi sinh học giúp hoa nở bền và giữ dáng lâu nhất." }
    ]
  },
  {
    id: "hoa-thanh-tu",
    name: "Hoa thanh tú",
    scientificName: "Evolvulus glomeratus / Delphinium",
    category: "hoa-thanh-tu",
    colors: "Xanh da trời Sky Blue, Trắng ngọc",
    season: "Quanh năm",
    meaning: "Nhẹ nhàng và bình yên",
    characteristics: "Sắc hoa xanh biếc hiếm có tựa như giọt ngọc trời rơi xuống cỏ cây, cánh hoa xòe tròn dịu dàng mang lại cảm giác an yên tuyệt đối.",
    shortDesc: "Nhẹ nhàng và bình yên – sắc xanh thiên thanh hiếm có xoa dịu mọi âu lo trong tâm hồn.",
    heroImage: "assets/images/flowers/hoa-thanh-tu.jpg",
    thumbImage: "assets/images/flowers/hoa-thanh-tu.jpg",
    quote: "Một nhành hoa thanh tú mang sắc trời trong trẻo, tựa như làn gió mát lành thổi qua tâm trí.",
    detailOverview: "Hoa thanh tú là một trong những loài hoa hiếm hoi sở hữu sắc xanh da trời (Sky Blue) nguyên bản của tự nhiên. Loài hoa này hòa hợp tuyệt đối với bảng màu thương hiệu LumiFlower Sky Garden, đại diện cho sự thanh tịnh, tĩnh tâm và niềm an lạc.",
    story: "Trong văn hóa phương Tây, hoa sắc xanh luôn tượng trưng cho sự hy vọng và những khát vọng hướng thiện thanh cao. Một bình hoa thanh tú đặt bên cửa sổ ngập nắng mang lại cảm giác bình yên lạ thường cho người thưởng lãm.",
    facts: [
      "Màu xanh lam trong giới thực vật rất hiếm, chỉ chiếm khoảng 10% trong số hơn 300.000 loài thực vật có hoa trên hành tinh.",
      "Sắc xanh của hoa thanh tú được tạo nên từ sự cộng hưởng quang học phức tạp giữa sắc tố delphinidin và các ion kim loại trong dịch tế bào."
    ],
    botanicalParts: [
      { name: "Cánh hoa xanh lam", desc: "5 phiến cánh mỏng mịn mang sắc xanh da trời trong vắt, tâm nhụy trắng ngọc tương phản tuyệt đẹp." }
    ]
  },
  {
    id: "hoa-phoi-hop",
    name: "Hoa phối hợp",
    scientificName: "Botanical Harmony Arrangement",
    category: "hoa-phoi-hop",
    colors: "Vàng nắng, Trắng ngọc, Xanh lá Sage",
    season: "Bốn mùa nghệ thuật",
    meaning: "Nghệ thuật của sự hài hòa",
    characteristics: "Nghệ thuật kết hợp tài tình giữa hoa hướng dương, cúc trắng, baby và cành lá phụ tạo nên tổng thể cân đối, sinh động.",
    shortDesc: "Nghệ thuật của sự hài hòa – bản giao hưởng màu sắc và kết cấu mang sinh khí cho không gian sống.",
    heroImage: "assets/images/flowers/hoa-phoi-hop.jpg",
    thumbImage: "assets/images/flowers/hoa-phoi-hop.jpg",
    quote: "Khi từng loài hoa khiêm nhường cùng nhau cất tiếng, một bản giao hưởng tuyệt mỹ của thiên nhiên được cất lên.",
    detailOverview: "Bình hoa phối hợp là đỉnh cao của nghệ thuật cắm hoa tự nhiên. Không một loài hoa nào lấn át loài hoa nào; thay vào đó, đóa hướng dương ấm áp làm điểm tựa, những bông cúc trắng làm dịu mắt, và các cành lá xô thơm mang lại nét mềm mại nâng đỡ toàn bộ bố cục.",
    story: "Mỗi tác phẩm hoa phối hợp là một bức tranh về sự gắn kết cộng đồng: mỗi cá nhân một màu sắc, một tính cách riêng, nhưng khi cùng chung sống hòa hợp sẽ tạo nên một xã hội tốt đẹp, tràn ngập tình yêu thương.",
    facts: [
      "Nguyên tắc phối hoa 3 lớp: Hoa tiêu điểm (focal), hoa bổ trợ (secondary) và hoa đệm (filler) tạo chiều sâu thị giác 3D.",
      "Sử dụng giỏ mây tre đan mộc mạc tôn vinh vẻ đẹp tự nhiên không gượng ép của hoa."
    ],
    botanicalParts: [
      { name: "Bố cục đa tầng", desc: "Sắp xếp theo hình kim tự tháp mềm mại, tạo góc nhìn 360 độ hoàn hảo từ mọi phía." }
    ]
  },
  {
    id: "hoa-tra",
    name: "Hoa trà",
    scientificName: "Camellia japonica",
    category: "hoa-tra",
    colors: "Hồng phớt, Trắng tuyết, Đỏ thắm",
    season: "Mùa Đông – Đầu Xuân",
    meaning: "Dịu dàng và kiên định",
    characteristics: "Cánh hoa dày dặn xếp tầng đối xứng hoàn mỹ, tâm nhụy vàng rực rỡ, lá cây xanh đậm bóng bẩy xanh mướt quanh năm.",
    shortDesc: "Dịu dàng và kiên định – cánh hoa thanh tao nở kiêu hãnh giữa mùa đông buốt giá.",
    heroImage: "assets/images/flowers/hoa-tra.jpg",
    thumbImage: "assets/images/flowers/hoa-tra.jpg",
    quote: "Hoa trà nở giữa mùa đông lạnh giá, dịu dàng mà kiên định như phẩm cách của người tri kỷ.",
    detailOverview: "Hoa trà (Camellia) là biểu tượng bất hủ của vẻ đẹp duyên dáng và lòng kiên định. Cây trà có thể nở hoa rực rỡ ngay giữa mùa đông giá rét mà cánh hoa vẫn giữ nguyên vẻ tươi tắn, không hề nao núng trước gió sương.",
    story: "Trong danh tác văn học 'Trà hoa nữ', hoa trà gắn liền với tâm hồn trong trắng, đức hy sinh và tình yêu thanh khiết. Tại các khu vườn truyền thống Việt Nam, cây hoa trà là niềm tự hào của người chơi hoa sành điệu.",
    facts: [
      "Cây hoa trà có thể sống thọ hơn 200 năm và vẫn tiếp tục trổ hoa rực rỡ mỗi dịp tết đến xuân về.",
      "Khác với các loài hoa khác thường rụng từng cánh, hoa trà khi tàn thường rơi nguyên cả đóa hoa xuống đất như một biểu tượng của sự kiêu hãnh vẹn toàn."
    ],
    botanicalParts: [
      { name: "Cánh hoa sáp mịn", desc: "Dày dặn, xếp so le đều đặn quanh tâm hoa, có khả năng chống chịu sương lạnh tuyệt hảo." },
      { name: "Chùm nhụy vàng tươi", desc: "Hàng chục nhị hoa dính liền ở gốc tạo thành chiếc vương miện nhỏ ở tâm hoa." }
    ]
  }
];

// Danh mục hoa (Categories)
const LUMI_CATEGORIES = [
  { id: "all", name: "Tất cả", icon: "all" },
  { id: "hoa-hong", name: "Hoa hồng", desc: "Tình yêu & trân trọng" },
  { id: "hoa-tulip", name: "Hoa tulip", desc: "Lời nhắn của mùa xuân" },
  { id: "hoa-huong-duong", name: "Hoa hướng dương", desc: "Năng lượng tích cực" },
  { id: "cam-tu-cau", name: "Hoa cẩm tú cầu", desc: "Biết ơn & chân thành" },
  { id: "hoa-ly", name: "Hoa ly", desc: "Thanh khiết & cao quý" },
  { id: "hoa-baby", name: "Hoa baby", desc: "Nhỏ bé nhưng đầy ý nghĩa" },
  { id: "hoa-cuc", name: "Hoa cúc", desc: "Vẻ đẹp trong trẻo" },
  { id: "hoa-sen", name: "Hoa sen", desc: "Thanh cao & thuần khiết" },
  { id: "hoa-mau-don", name: "Hoa mẫu đơn", desc: "Thịnh vượng & hạnh phúc" },
  { id: "hoa-lan", name: "Hoa lan", desc: "Quý phái & bền bỉ" },
  { id: "hoa-dai", name: "Hoa dại", desc: "Mộc mạc & tự nhiên" },
  { id: "hoa-theo-mua", name: "Hoa theo mùa", desc: "Sắc màu khoảnh khắc" },
  { id: "hoa-thanh-tu", name: "Hoa thanh tú", desc: "Nhẹ nhàng & bình yên" },
  { id: "hoa-phoi-hop", name: "Hoa phối hợp", desc: "Nghệ thuật hài hòa" },
  { id: "hoa-tra", name: "Hoa trà", desc: "Dịu dàng & kiên định" }
];

// 7 Bước nghệ thuật tạo sản phẩm hoa (Phi thương mại)
const LUMI_CREATION_STEPS = [
  {
    step: "01",
    title: "Lựa chọn hoa",
    desc: "Tuyển chọn những cành hoa đạt độ nở lý tưởng từ sáng sớm, khi cánh hoa còn ngậm sương và đạt độ tươi tắn thuần khiết nhất."
  },
  {
    step: "02",
    title: "Kiểm tra độ tươi",
    desc: "Đánh giá tỉ mỉ cấu trúc cánh hoa, đài hoa, độ căng mọng của thân và đảm bảo không có bất kỳ tổn thương tự nhiên nào."
  },
  {
    step: "03",
    title: "Sơ chế nâng niu",
    desc: "Tỉa bỏ bớt lá phụ dưới gốc, loại bỏ gai nhọn và cắt vát cuống 45 độ dưới làn nước mát để thông suốt mạch dẫn nuôi hoa."
  },
  {
    step: "04",
    title: "Phối màu nghệ thuật",
    desc: "Kết hợp bảng màu Sky Garden hài hòa giữa Sky Blue, Cloud White, Baby Blue và sắc Sage Green thanh thoát."
  },
  {
    step: "05",
    title: "Sắp xếp bố cục",
    desc: "Tạo hình theo phong cách phi đối xứng tự nhiên, lớp trước nâng đỡ lớp sau để từng bông hoa đều có không gian thở."
  },
  {
    step: "06",
    title: "Hoàn thiện chi tiết",
    desc: "Cố định nhẹ nhàng bằng dải lụa mềm mại hoặc bình gốm mộc, bảo toàn nét thanh tao mà không gượng ép hình thức."
  },
  {
    step: "07",
    title: "Trưng bày & Thưởng ngoạn",
    desc: "Đặt tác phẩm tại không gian thoáng mát, đón ánh sáng tự nhiên dịu nhẹ để hoa tỏa hương và truyền tải cảm xúc trọn vẹn."
  }
];

// Bài viết Blog & Câu chuyện của hoa
const LUMI_ARTICLES = [
  {
    id: "hoa-va-tinh-yeu",
    title: "Hoa và tình yêu: Ngôn ngữ không lời chạm đến trái tim",
    category: "Tình yêu",
    readTime: "5 phút đọc",
    date: "12 Tháng 9, 2026",
    image: "assets/images/flowers/hoa-hong.jpg",
    excerpt: "Từ những đóa hồng e ấp đến những chùm tulip dịu dàng, hoa đã đồng hành cùng con người qua muôn vàn cung bậc cảm xúc của tình yêu.",
    content: `
      <p class="lead">Từ thuở sơ khai của nhân loại, khi ngôn từ chưa đủ phong phú để diễn tả hết những rung động tế vi trong lồng ngực, con người đã tìm đến hoa như một sứ giả thầm lặng.</p>
      <p>Mỗi cánh hoa nở ra không đơn thuần là sự chuyển mình của thực vật, mà là một nhịp đập của cảm xúc. Một cành hồng trao tay trong buổi chiều hoàng hôn không chỉ mang sắc đỏ dịu mắt, mà là cả một lời hứa chở che và trân trọng. Một nhánh baby trắng muốt tượng trưng cho sự gắn bó chân thành, không vụ lợi và luôn thấu hiểu.</p>
      <blockquote>“Có những điều không cần nói thành lời, chỉ cần một bông hoa là đủ để cả hai tâm hồn cùng chung một nhịp thở.”</blockquote>
      <p>Tình yêu trong thời hiện đại đôi khi bị cuốn vào sự gấp gáp của nhịp sống số. Nhưng khi bạn dừng lại, tự tay cắm một bình hoa cẩm tú cầu dịu mát đặt lên bàn của người thân yêu, bạn đã trao đi một món quà tinh thần vô giá: thời gian, sự chú tâm và lòng tri ân chân thành nhất.</p>
    `
  },
  {
    id: "hoa-va-ky-uc",
    title: "Hoa và ký ức: Những mùi hương đánh thức miền thương nhớ",
    category: "Ký ức",
    readTime: "6 phút đọc",
    date: "18 Tháng 9, 2026",
    image: "assets/images/flowers/cam-tu-cau.jpg",
    excerpt: "Có những mùi hương, những màu hoa vẫn luôn sống mãi trong ký ức, gợi nhắc về khoảng sân nhà thuở nhỏ và những người thân yêu.",
    content: `
      <p class="lead">Khứu giác là giác quan kỳ diệu nhất gắn liền với trí nhớ cảm xúc. Đôi khi chỉ một thoáng hương hoa cúc thoảng qua trong cơn gió lạnh đầu mùa cũng đủ đưa ta trở về cả một miền tuổi thơ xa xôi.</p>
      <p>Ai trong chúng ta cũng mang trong mình ký ức về một loài hoa nào đó: đó có thể là giàn hoa giấy rực nắng trước hiên nhà nội, là cành hoa bưởi mẹ ướp vào làn tóc thơm, hay chậu hoa cẩm tú cầu đầu tiên được người bạn thân tặng vào ngày tốt nghiệp.</p>
      <blockquote>“Hoa không chỉ đẹp ở hiện tại, hoa còn là chiếc chìa khóa mở ra những cánh cửa ký ức tươi đẹp nhất của cuộc đời.”</blockquote>
      <p>Tại LumiFlower, chúng tôi ghi lại những câu chuyện ấy không phải để hoài niệm tiếc nuối, mà để trân quý từng phút giây đang sống và thấu hiểu hơn giá trị của sự hiện diện.</p>
    `
  },
  {
    id: "hoa-trong-van-hoa-viet",
    title: "Hoa trong văn hóa Việt Nam: Vẻ đẹp thanh cao qua ngàn năm",
    category: "Văn hóa Việt Nam",
    readTime: "7 phút đọc",
    date: "24 Tháng 9, 2026",
    image: "assets/images/flowers/hoa-sen.jpg",
    excerpt: "Hoa sen, hoa đào, hoa mai, hoa cúc... không chỉ tô điểm cho nếp nhà người Việt mà còn mang đậm triết lý sống an hòa cùng tự nhiên.",
    content: `
      <p class="lead">Thiên nhiên nhiệt đới trù phú đã ban tặng cho đất nước Việt Nam bốn mùa hoa trái rực rỡ, nuôi dưỡng tâm hồn người Việt một tình yêu tha thiết với cỏ cây.</p>
      <p>Trong tâm thức người Việt, hoa sen là biểu tượng tối thượng của cốt cách: sinh ra nơi bùn lầy nhưng vẫn tỏa hương ngào ngạt, giữ trọn vẹn vẻ thanh tao không vẩn đục. Cứ mỗi độ tháng Tư về, người Hà Nội lại bồi hồi đón gánh hoa loa kèn trắng muốt; rồi đến tháng Chạp, sắc đào thắm Nhật Tân và mai vàng phương Nam lại rộn rã báo hiệu mùa sum vầy đoàn viên.</p>
      <blockquote>“Người Việt thưởng hoa không chỉ bằng mắt mà bằng cả tấm lòng hiếu khách, sự tao nhã và lòng biết ơn thiên nhiên trời đất.”</blockquote>
      <p>Nghệ thuật ướp trà sen Tây Hồ, nghệ thuật gọt củ hoa thủy tiên đón Tết... là những di sản tinh thần độc đáo minh chứng cho sự tinh tế trong lối sống hòa mình cùng vạn vật của cha ông ta.</p>
    `
  },
  {
    id: "hoa-trong-nhung-dip-dac-biet",
    title: "Hoa trong những dịp đặc biệt: Gửi trao lời chúc và năng lượng an lành",
    category: "Dịp đặc biệt",
    readTime: "5 phút đọc",
    date: "28 Tháng 9, 2026",
    image: "assets/images/flowers/hoa-tulip.jpg",
    excerpt: "Mỗi sự kiện lớn nhỏ trong đời người từ ngày sinh nhật, tốt nghiệp đến ngày cưới đều trở nên thiêng liêng hơn khi có sự hiện diện của hoa tươi.",
    content: `
      <p class="lead">Từ khoảnh khắc cất tiếng khóc chào đời đến khi bước vào lễ đường hôn nhân hay những cột mốc trưởng thành, hoa luôn ở đó như một nhân chứng tĩnh lặng và dịu dàng.</p>
      <p>Vào ngày tốt nghiệp, một bó hướng dương rạng rỡ mang thông điệp chúc bạn vươn xa, kiên định với ước mơ. Trong ngày cưới, bó hoa cưới cầm tay với sắc trắng ngọc và xanh pastel nhẹ nhàng chở che cho lời thề nguyền hạnh phúc trăm năm.</p>
      <blockquote>“Không cần quà cáp xa hoa, một đóa hoa tươi được trao bằng ánh mắt chân thành đã là lời chúc phúc vẹn tròn nhất.”</blockquote>
      <p>Hoa giúp ta thể hiện lòng biết ơn đến thầy cô, gửi lời tri ân đến cha mẹ và tiếp thêm nguồn năng lượng tích cực cho những người bạn đang đối diện với thử thách.</p>
    `
  },
  {
    id: "hoa-va-nghe-thuat",
    title: "Hoa và nghệ thuật: Nguồn cảm hứng bất tận trong hội họa và nhiếp ảnh",
    category: "Nghệ thuật",
    readTime: "6 phút đọc",
    date: "01 Tháng 10, 2026",
    image: "assets/images/flowers/hoa-mau-don.jpg",
    excerpt: "Từ trường phái ấn tượng của Claude Monet đến tranh tĩnh vật hiện đại, hoa luôn là bậc thầy về hòa sắc và hình khối.",
    content: `
      <p class="lead">Không có một họa sĩ vĩ đại nào trong lịch sử nhân loại lại chưa từng một lần say đắm trước vẻ đẹp cấu trúc và màu sắc của một bông hoa.</p>
      <p>Claude Monet đã dành cả nửa đời sau của mình bên hồ súng Giverny để ghi lại khoảnh khắc ánh sáng nhảy múa trên cánh hoa. Vincent van Gogh tìm thấy sự cứu rỗi tinh thần trong những bức tranh hoa hướng dương rực lửa và hoa diên vĩ xanh thẳm.</p>
      <blockquote>“Hoa là tác phẩm điêu khắc sống động nhất của tạo hóa, nơi tỷ lệ vàng Fibonacci hiển hiện trong từng nếp gấp cánh hoa.”</blockquote>
      <p>Trong nhiếp ảnh hiện đại phong cách Editorial Botanical, chúng tôi học cách tôn trọng ánh sáng tự nhiên dịu nhẹ, giữ lại cả những giọt sương mai và chiếc lá hơi cong để tôn vinh sự bất toàn đầy quyến rũ của tự nhiên.</p>
    `
  },
  {
    id: "hoa-va-cam-xuc",
    title: "Hoa và cảm xúc: Khi thiên nhiên chữa lành tâm hồn chúng ta",
    category: "Cảm xúc",
    readTime: "5 phút đọc",
    date: "03 Tháng 10, 2026",
    image: "assets/images/flowers/hoa-thanh-tu.jpg",
    excerpt: "Nghiên cứu khoa học chứng minh việc ngắm nhìn và chăm sóc hoa mỗi ngày giúp giảm căng thẳng và nuôi dưỡng lòng trắc ẩn.",
    content: `
      <p class="lead">Trong thời đại số với vô vàn màn hình xanh và thông báo dồn dập, tâm trí con người dễ rơi vào trạng thái quá tải cảm giác và mệt mỏi tinh thần.</p>
      <p>Liệu pháp hoa cỏ (Floritherapy) và nghệ thuật cắm hoa tĩnh tâm (Mindful Flower Arranging) đang trở thành liều thuốc tinh thần được ưa chuộng khắp thế giới. Khi đôi bàn tay nhẹ nhàng nâng niu cuống hoa, cắt tỉa từng chiếc lá và cảm nhận làn nước mát lành, tâm trí ta tự nhiên chậm lại.</p>
      <blockquote>“Mỗi màu hoa là một sắc thái của cảm xúc. Khi ta dịu dàng với một bông hoa, ta cũng đang học cách dịu dàng với chính bản thân mình.”</blockquote>
      <p>Hãy dành cho mình 15 phút mỗi sáng để thưởng một bông hoa nở, ngửi hương thơm thoang thoảng và hít thở thật sâu. Bạn sẽ nhận ra bình yên chưa bao giờ ở quá xa.</p>
    `
  }
];

// Bộ sưu tập trưng bày (15 tác phẩm chuẩn từ bảng hình của bạn)
const LUMI_GALLERY = [
  {
    id: "gal-1",
    title: "Hoa cẩm tú cầu",
    category: "hoa-xanh",
    flowerName: "Hoa cẩm tú cầu",
    image: "assets/images/flowers/cam-tu-cau.jpg",
    desc: "Sự biết ơn và chân thành"
  },
  {
    id: "gal-2",
    title: "Hoa hồng",
    category: "hoa-hong",
    flowerName: "Hoa hồng",
    image: "assets/images/flowers/hoa-hong.jpg",
    desc: "Biểu tượng của tình yêu và sự trân trọng"
  },
  {
    id: "gal-3",
    title: "Hoa tulip",
    category: "hoa-pastel",
    flowerName: "Hoa tulip",
    image: "assets/images/flowers/hoa-tulip.jpg",
    desc: "Lời nhắn của mùa xuân"
  },
  {
    id: "gal-4",
    title: "Hoa hướng dương",
    category: "hoa-theo-mua",
    flowerName: "Hoa hướng dương",
    image: "assets/images/flowers/hoa-huong-duong.jpg",
    desc: "Năng lượng tích cực"
  },
  {
    id: "gal-5",
    title: "Hoa ly",
    category: "hoa-trang",
    flowerName: "Hoa ly",
    image: "assets/images/flowers/hoa-ly.jpg",
    desc: "Thanh khiết và cao quý"
  },
  {
    id: "gal-6",
    title: "Hoa baby",
    category: "hoa-trang",
    flowerName: "Hoa baby",
    image: "assets/images/flowers/hoa-baby.jpg",
    desc: "Nhỏ bé nhưng đầy ý nghĩa"
  },
  {
    id: "gal-7",
    title: "Hoa cúc",
    category: "hoa-trang",
    flowerName: "Hoa cúc",
    image: "assets/images/flowers/hoa-cuc.jpg",
    desc: "Vẻ đẹp của sự trong trẻo"
  },
  {
    id: "gal-8",
    title: "Hoa sen",
    category: "hoa-theo-mua",
    flowerName: "Hoa sen",
    image: "assets/images/flowers/hoa-sen.jpg",
    desc: "Thanh cao và thuần khiết"
  },
  {
    id: "gal-9",
    title: "Hoa mẫu đơn",
    category: "hoa-pastel",
    flowerName: "Hoa mẫu đơn",
    image: "assets/images/flowers/hoa-mau-don.jpg",
    desc: "Sự thịnh vượng và hạnh phúc"
  },
  {
    id: "gal-10",
    title: "Hoa lan",
    category: "khong-gian",
    flowerName: "Hoa lan",
    image: "assets/images/flowers/hoa-lan.jpg",
    desc: "Quý phái và bền bỉ"
  },
  {
    id: "gal-11",
    title: "Hoa dại",
    category: "hoa-theo-mua",
    flowerName: "Hoa dại",
    image: "assets/images/flowers/hoa-dai.jpg",
    desc: "Vẻ đẹp mộc mạc và tự nhiên"
  },
  {
    id: "gal-12",
    title: "Hoa theo mùa",
    category: "hoa-theo-mua",
    flowerName: "Hoa theo mùa",
    image: "assets/images/flowers/hoa-theo-mua.jpg",
    desc: "Sắc màu của từng khoảnh khắc"
  },
  {
    id: "gal-13",
    title: "Hoa thanh tú",
    category: "hoa-xanh",
    flowerName: "Hoa thanh tú",
    image: "assets/images/flowers/hoa-thanh-tu.jpg",
    desc: "Nhẹ nhàng và bình yên"
  },
  {
    id: "gal-14",
    title: "Hoa phối hợp",
    category: "nghe-thuat",
    flowerName: "Hoa phối hợp",
    image: "assets/images/flowers/hoa-phoi-hop.jpg",
    desc: "Nghệ thuật của sự hài hòa"
  },
  {
    id: "gal-15",
    title: "Hoa trà",
    category: "hoa-pastel",
    flowerName: "Hoa trà",
    image: "assets/images/flowers/hoa-tra.jpg",
    desc: "Dịu dàng và kiên định"
  }
];

// FAQ
const LUMI_FAQS = [
  {
    q: "LumiFlower có phải là website bán hoa hay nhận đặt hoa trực tuyến không?",
    a: "Hoàn toàn không. LumiFlower là website phi thương mại phục vụ học tập, lưu trữ hình ảnh, chia sẻ kiến thức thực vật học và kể những câu chuyện ý nghĩa về thế giới hoa. Chúng tôi không có giỏ hàng, không có giá tiền và không kinh doanh hoa dưới bất kỳ hình thức nào."
  },
  {
    q: "Làm thế nào để giữ hoa cắm trong bình tươi lâu nhất tại nhà?",
    a: "Bí quyết quan trọng nhất là giữ bình nước luôn sạch: Rửa kỹ bình cắm, cắt vát cuống hoa 45 độ dưới làn nước mát, tỉa sạch lá ở phần ngập nước để tránh thối rữa, thay nước mỗi ngày và đặt hoa ở nơi thoáng mát, tránh ánh nắng gắt trực tiếp."
  },
  {
    q: "Ý nghĩa của bộ màu thương hiệu LumiFlower Sky Garden là gì?",
    a: "Bộ màu của LumiFlower lấy cảm hứng từ khu vườn dưới bầu trời xanh thanh bình: Sắc Primary Blue (#6BAED6) và Sky Blue (#DCEFFA) tượng trưng cho bầu trời và sự trong trẻo; Cloud White (#F8FCFF) là những vầng mây thuần khiết; và Sage Green (#A8C8C5) là sức sống của thiên nhiên cỏ cây."
  }
];
