if (this.cursors.left.isDown)
{
	this.grub.setVelocity(-150, 0)
	this.grub.play('walkL', true)
}
else if (this.cursors.right.isDown)
{
	this.grub.setVelocity(150, 0)
	this.grub.play('walkR', true)
}
else if (this.cursors.up.isDown)
{
	this.grub.setVelocity(0, -150)
	this.grub.play('walkUp', true)
}
else if (this.cursors.down.isDown)
{
	this.grub.setVelocity(0, 150)
	this.grub.play('walkD', true)
}
else if (this.cursors.down.isUp && )