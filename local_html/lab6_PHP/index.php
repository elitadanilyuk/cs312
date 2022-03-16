<!DOCTYPE html>
<html>
<body>
	<div id='main'>
		<?php
			echo "<h1>Hello World!</h1>";
			
			$myGame = "battle ship";
			echo "<p>My favorite board game is $myGame.</p>";
		?>

		<!--TIP: Remove these comments to be able to view the code better--->
		<form method='POST'>
			<h2>Please input your favorite board game:</h2>
			<!-- 
			The 'name' attribute is submitted into the POST global variable once the button is clicked.
			It submits it as a key-value pair:
			
					$_POST = { "name": "VALUE" }
			
			where VALUE is the string entered into the box. Since we're only transferring 1 variable, 
			$_POST will have only 1 element.
			--->
			<input type="text" name="user">
			<!--
			The line below denotes the type of input to be received, in this case, it is a submission button.
			--->
			<input type="submit" value="Submit">
		</form>
		<?php
			$userGame = $_POST["user"];
			echo "<p>Your favorite board game is: $userGame.<p/>";
		?>

		<?php
			$games = array("Checkers", "Chess", "Monopoly", "Life");

			if (in_array($userGame, $games)){
				echo "Match found: $userGame";
			} else {
				echo "Match not found: $userGame";
			}
		?>
	<div>
</body>
</html>
