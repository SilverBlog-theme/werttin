# Ink_Werttin

> An ink theme based on offical theme, and adapted for SilverBlog

This topic is the [SilverBlog](https://github.com/SilverBlogTeam/SilverBlog) adaptation version of [Skimige Version](https://github.com/Skimige/ink_Werttin).

## Instructions for use

### Preview

The easiest way is to visit my blog ~ [portal](http://ikevin.in)

[SilverBlog version, slightly different in detail](https://www.tcdw.net/)

The following screenshots may be a bit old.

[Home](https://cloud.githubusercontent.com/assets/9017470/10266999/daf3a772-6ab1-11e5-9449-5bcc47eabbc7.gif) \ [article page](https://cloud.githubusercontent.com/assets/9017470/10267001/06981ca0-6ab2-11e5-9f6e-ad007b3e66b6.gif) \ [Archive Page](https://cloud.githubusercontent.com/assets/9017470/10267003/26286408-6ab2-11e5-97b4-1cf25b14a98a.gif)

### download

```bash
cd /path/to/your/SilverBlog/templates
git clone git://github.com/SilverBlogTeam/werttin
ln -s $PWD/werttin/static/werttin $PWD/static/werttin
```

### Features

* the default font for `Microsoft Yahei UI`, nothing to sans-serif` and` serif`
* In order to make the load faster, abandon most of the picture. Including the home page by Avatar, the article under Little Avatar and so on
* The article does not support header function ** (this feature is castrated)
* more ..

### Enable posture

Set the following fields in config / system.json:

* `Author_Name` (author nickname)
* `Author_Introduction` (author's profile)
* `Author_Image` (author avatar)

In the `public/header.html`, if your `favicon.ico` is to be replaced or modified to PNG format, please modify it yourself.

Another: Although it is really removed from the first few head of the head, but in the article page comment box, the author's profile in the picture and did not remove.
So ... do not forget to set up your `config / system.json`!

## License

Follow the [Apache License 2.0](https://github.com/SilverBlogTeam/werttin/blob/master/LICENSE)
